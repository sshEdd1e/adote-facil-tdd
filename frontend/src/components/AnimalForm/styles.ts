import styled, { css } from 'styled-components'

import * as RadioGroup from '@radix-ui/react-radio-group'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

interface FormProps {
  location: 'page' | 'modal'
}

export const Form = styled.form<FormProps>`
  ${({ location }) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    font-size: ${location === 'page' ? '1rem' : '0.75rem'};
  `}
`

export const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
`

export const AnimalTypeInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.25rem;

  width: 100%;
`

export const AnimalBirthInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;

    gap: 0.25rem;

    width: 60px;

    input {
      padding: 0.5rem;
    }
  }
`

export const AnimalRaceInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;

    gap: 0.25rem;

    width: 190px;

    input {
      padding: 0.5rem;
    }
  }
`

export const AnimalGenderInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.25rem;

  width: 100%;
`

export const AnimalSizeWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.25rem;

  width: 100%;
`

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`

export const RadioGroupItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

export const RadioGroupItem = styled(RadioGroup.Item)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray[200]};
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 1px solid ${theme.colors.gray[500]};
  `}
`

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: ${theme.colors.gray[500]};
    }
  `}
`

export const AnimalPicturesInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.25rem;

  width: 100%;

  input {
    display: none;
  }
`

export const AddAnimalPicturesSwiper = styled(Swiper)`
  display: flex;

  justify-content: flex-start;
  margin: 0px;
  overflow: hidden;

  .swiper-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`

export const AnimalPictureSwiperSlide = styled(SwiperSlide)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 94px;

    border-radius: 6px;

    gap: 0.5rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      padding: 0.25rem 0.5rem;

      border: none;
      border-radius: 4px;
      background-color: ${theme.colors.gray[300]};
      color: ${theme.colors.red[700]};

      font-size: 10px;
    }
  `}
`

export const AnimalPicturesInput = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0.25rem;

    width: 92px;
    height: 135px;

    color: ${theme.colors.green[300]};
    border: 1px solid ${theme.colors.green[300]};
    border-radius: 6px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${theme.colors.green[300]};
      border-radius: 100%;

      width: 32px;
      height: 32px;
    }
  `}
`

export const AnimalPicture = styled(Image)`
  border-radius: 6px;
  width: 94px;
  height: 135px;

  object-fit: cover;
`
