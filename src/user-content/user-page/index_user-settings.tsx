import 'react-datepicker/dist/react-datepicker.css'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import useAddPost from '../../hooks/change-user-name-hook'
import useGetUser from '../../hooks/get-user-hook'
import Button from '../../ui-library/button-click/button'
import H3 from '../../ui-library/h3/h3'
const StyledSettingGeneralBlock = styled.div`
  text-align: left;
  padding-top: 1rem;
`
const StyledInput = styled.input`
  border: none;
  display: inline-block;
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  line-height: inherit;
  vertical-align: inherit;
  text-align: left;
  color: inherit;
  background: none;
  font-size: 1.5rem;
  font-family: 'Mochiy';
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  :disabled {
    border: 0;
  }
`
const StyledDatepicker = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const StyledFlexItem = styled.div`
  padding: 0.5rem;
  DatePicker {
    background-color: var(--global-var-color-orange);
    border-radius: 5px;
    border-color: var(--global-var-color-orange);
    font-family: var(--global-var-font-mocha);
    color: var(--global-var-color-white);
  }
  DatePicker:hover,
  DatePicker:active,
  DatePicker:visited {
    background-color: #f2bd9f;
    border-color: var(--global-var-color-orange);
  }
`
function Settings() {
  const { id } = useParams()
  const user = useGetUser()
  const [startDate, setStartDate] = useState<Date | null>(new Date('2014/02/08'))
  const [endDate, setEndDate] = useState<Date | null>(new Date('2014/02/10'))
  const [text, setText] = useState<any | undefined>(undefined)
  const queryaddpost = useAddPost()
  return user
    ?.filter((user: any) => user.id === String(id))
    .map(
      (
        user: {
          group: string
          name: string
          followed: boolean
          avatar: string | number
          image_profile: string | number
          body: string
          length: number
          spancount: number
          id: number
        },
        index: number
      ) => (
        <section key={index}>
          <StyledSettingGeneralBlock>
            <H3 message='Setting' />
            <p>Settings for personal view</p>
            <StyledInput
              type='text'
              value={user.name}
              onClick={() => {
                queryaddpost.mutate(text)
                setText('')
              }}
              onChange={(event: { target: { value: any } }) => {
                setText(event.target.value)
              }}
            />
            <div>
              <p>Data Birthday:</p>
              <StyledDatepicker>
                <StyledFlexItem>
                  <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                  />
                </StyledFlexItem>
              </StyledDatepicker>
            </div>
          </StyledSettingGeneralBlock>
          <Button message='SUBMIT' />
        </section>
      )
    )
}

export default Settings

/***
             <div contentEditable='true' onInput={e => (user.id, e.currentTarget.textContent)}>
              {user.name}
            </div>
TO DO:
* public name for all people can be editable;
* private name impossible editable;
* add BD to database and dispaly it;

 */
