import 'react-datepicker/dist/react-datepicker.css'

import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import PictureCalendarBlock from '../../assets/user-settings/calendar_block.png'
import PicturesName from '../../assets/user-settings/change_name.png'
import Pictures from '../../assets/user-settings/delete_user.png'
import PicturesEmailBlock from '../../assets/user-settings/email_block.png'
import PicturesNameBlock from '../../assets/user-settings/name_block.png'
import PicturesPasswordBlock from '../../assets/user-settings/password_block.png'
import useChangeBirthData from '../../hooks/change-user-birthdata-hook'
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

const StyledFlexItem = styled.div`
  padding: 0.5rem;
  display: flex;
  .react-datepicker-wrapper {
    width: inherit;
  }
  .react-datepicker__input-container input {
    background-color: var(--global-var-color-orange);
    border-radius: 5px;
    border-color: var(--global-var-color-orange);
    font-family: var(--global-var-font-mocha);
    color: var(--global-var-color-white);
    width: auto;
  }
  .react-datepicker__input-container input:hover,
  .react-datepicker__input-container input:active,
  .react-datepicker__input-container input:visited {
    background-color: #f2bd9f;
    border-color: var(--global-var-color-orange);
  }
  button {
    margin-left: 1.7rem;
  }
`
const StyledGeneralBlock = styled.div`
  display: flex;
  gap: 1rem;
  button {
    margin-top: 0.3rem;
  }
`
const StyledForm = styled.form``
const StyledTextTitle = styled.p`
  margin-top: 1rem;
  font-size: 2rem;
`
const StyledSection = styled.section`
  background-color: #fafaf6;
  padding-bottom: 1rem;
`
const StyledSectionBlock = styled.div`
  background-color: white;
  border-radius: 10px;
`
const StyledDisplayMessage = styled.p`
  margin-top: 1.7rem;
  color: #ff6b08;
`
const StyledFlexFormItem = styled.div`
  display: flex;
  gap: 1rem;
  button {
    margin-top: 1.7rem;
  }
`
function Settings() {
  const { id } = useParams()
  const user = useGetUser()
  const thisuser = user?.find(user => user.id === id)
  const [startDate, setStartDate] = useState<Date | null>(new Date(`${thisuser.data_birth}`))
  const querydeleteuser = useDeleteUser(id)
  const querychangename = useChangeName()
  const querychangebirthdata = useChangeBirthData()
  const { handleSubmit } = useForm()
  const [text, setText] = useState(thisuser.name)
  const urlBack = `/user/${id}/post`
  return (
    <StyledSection>
      {querydeleteuser.isSuccess ? <>{window.location.replace('/pages')}</> : null}
      <StyledSettingGeneralBlock>
        <StyledGeneralBlock>
          <H3 message='Settings' />
          <H3 message={thisuser.realName} primary />
          <ButtonPicture
            button_click_link
            width='1.5rem'
            height='1.5rem'
            img={Pictures}
            onClick={() => {
              querydeleteuser.mutate(thisuser.id)
            }}
          />
        </StyledGeneralBlock>
        <LinkBack message='Back' href={urlBack} />
        <StyledSectionBlock>
          <StyledTextTitle>
            <img src={PicturesNameBlock} />
            Settings for personal view
          </StyledTextTitle>
          {querychangename.isSuccess || querychangebirthdata.isSuccess ? (
            <StyledDisplayMessage>Change success!</StyledDisplayMessage>
          ) : null}
          <StyledForm
            onSubmit={handleSubmit(() => {
              querychangename.mutate(text)
              querychangebirthdata.mutate(startDate)
            })}>
            <StyledFlexFormItem>
              <StyledTextTitle>Nickname:</StyledTextTitle>
              <StyledInput
                value={text}
                onChange={(event: { target: { value: any } }) => {
                  setText(event.target.value)
                }}
                name='name'
                //placeholder={thisuser.name}
                required
              />
              <ButtonPicture button_click_link width='1.5rem' height='1.5rem' img={PicturesName} />
            </StyledFlexFormItem>
            <StyledTextTitle>
              <img src={PictureCalendarBlock} />
              Setting for Data Birthday {thisuser.data_birth}
            </StyledTextTitle>
            <StyledFlexItem>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                maxDate={new Date()}
              />
              <ButtonPicture button_click_link width='1.5rem' height='1.5rem' img={PictureCalendarBlock} />
            </StyledFlexItem>
          </StyledForm>
        </StyledSectionBlock>
        <StyledSectionBlock>
          <StyledTextTitle>
            <img src={PicturesEmailBlock} />
            Setting for change e-mail
          </StyledTextTitle>
          <H3 message={thisuser.email} />
        </StyledSectionBlock>
        <StyledSectionBlock>
          <StyledTextTitle>
            <img src={PicturesPasswordBlock} />
            Change password
          </StyledTextTitle>
        </StyledSectionBlock>
      </StyledSettingGeneralBlock>
    </StyledSection>
  )
}

export default Settings

/** Make button disabled or anything when not empty name or when not focus on input and check was name change or not ;
 * add portal for message
 * maybe need add timer for message disappear
 */
