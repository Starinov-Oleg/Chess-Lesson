import { format } from 'date-fns'
import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

import Popup from '../../../../../common/popup-message/popup-message'
import useDeletePost from '../../../../../hooks/post-delete-hook'
import Button from '../../../../../ui-library/button-click/button'
import ActionItem from '../../../user-index/user-actionline-item/action-line'

interface ActionPostLineProps {
  id: any
  searchResult: any
}

const togglePopupDelete = (id: any, userId: any | never, setIsOpen: any) => {
  setIsOpen({ show: true, id })
}
const handleDeleteFalse = (setIsOpen: any) => {
  setIsOpen({
    show: false,
    id: null,
  })
}

function ActionPostLineSearch({ id, searchResult }: ActionPostLineProps) {
  const querydeletepost = useDeletePost(id)

  const [isOpen, setIsOpen] = useState({ show: false, id: null })

  return (
    <>
      {searchResult
        ?.filter((querypost: { userId: string }) => querypost.userId === String(id))
        .map((item: { body: string | undefined; createdAt: any; id: number; userId: number }, index: number) => {
          return (
            <Fragment key={index}>
              <ActionItem
                body={item.body}
                data={format(new Date(item.createdAt), 'dd/MM/yyyy')}
                onClick={() => {
                  togglePopupDelete(item.id, item.userId, setIsOpen)
                }}
                id={item.id}
              />
              {isOpen.id === item.id && (
                <Popup
                  id={item.id}
                  content_title='Delete Post'
                  content_body='Post will deleted. This action is irreversible.'
                  content={
                    <>
                      <Button
                        message='Delete'
                        onClick={() => {
                          querydeletepost.mutate(item.id)
                        }}
                      />
                      <Button
                        message='Canchel'
                        onClick={() => {
                          handleDeleteFalse(setIsOpen)
                        }}
                      />
                    </>
                  }
                />
              )}
            </Fragment>
          )
        })}
    </>
  )
}

export default ActionPostLineSearch
