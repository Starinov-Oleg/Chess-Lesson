import 'react-datepicker/dist/react-datepicker.css'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import PicturesName from '../../assets/user-settings/change_name.png'
import Pictures from '../../assets/user-settings/delete_user.png'
import useChangeName from '../../hooks/change-user-name-hook'
import useGetUser from '../../hooks/get-user-hook'
import useDeleteUser from '../../hooks/user-delete-hook'
import LinkBack from '../../ui-library/button-link/button-link'
import ButtonPicture from '../../ui-library/button-pictures/button-pictures'
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
  :focus::placeholder {
    color: transparent;
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
  const [endDate] = useState<Date | null>(new Date('2014/02/10'))
  const querydeleteuser = useDeleteUser(id)
  const querychangename = useChangeName()
  const thisuser = user?.find(user => user.id === id)
  const { handleSubmit } = useForm()
  const [text, setText] = useState(thisuser.name)
  const urlBack = `/user/${id}/post`

  return (
    <section>
      {querydeleteuser.isSuccess ? (
        <>{window.location.replace('/pages')}</>
      ) : (
        <H3 message='Anything happend. Can not delete profile!' />
      )}
      <StyledSettingGeneralBlock>
        <H3 message='Setting' />
        <p>Settings for personal view</p>
        <p>Name:</p>
        <form
          onSubmit={handleSubmit(() => {
            querychangename.mutate(text)
          })}>
          <StyledInput
            value={text}
            onChange={(event: { target: { value: any } }) => {
              setText(event.target.value)
            }}
            name='name'
            //placeholder={thisuser.name}
            required
          />
          {querychangename.isSuccess ? <div>Name change success!</div> : null}
          <ButtonPicture button_click_link width='1.5rem' height='1.5rem' img={PicturesName} />
        </form>
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
        <LinkBack message='Back' href={urlBack} />

        <ButtonPicture
          button_click_link
          width='1.5rem'
          height='1.5rem'
          img={Pictures}
          onClick={() => {
            querydeleteuser.mutate(thisuser.id)
          }}
        />
      </StyledSettingGeneralBlock>
    </section>
  )
}

export default Settings

/** Make button disabled or anything when not empty name or when not focus on input and check was name change or not ;
 * add portal for message
 */
