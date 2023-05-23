import { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import ErrorTip from './ErrorTip'
import useAddTodo from '../hooks/useAddTodo'

const TodoAddForm = () => {
  const form_ref = useRef()
  const [btnAddText, setBtnAddText] = useState('+')
  const { register, reset, handleSubmit, control, formState: { errors } } = useForm()

  const { mutate } = useAddTodo({ formShow })

  function formShow() {
    reset();
    setBtnAddText(form_ref.current.classList.contains('hide') ? '-' : '+')
    form_ref.current.classList.toggle('hide')
  }

  async function addTodo(data) {
    mutate(data)
  }

  return (
    <>
      <button className="btn" onClick={ formShow }>{ btnAddText }</button>
      <form className="add-form hide" ref={ form_ref } onSubmit={ handleSubmit(addTodo) }>
        <div className="add-form_input-container">
          <input
            { ...register('title', {
              required: 'Заголовок не должен быть пустым'
            }) }
            className={ `add-form_input${ errors?.title ? ' invalidate' : '' }` }
            placeholder="Заголовок" />

          { errors?.title && <ErrorTip error={ errors.title.message } /> }

          <Controller
            control={ control }
            rules={{
              required: 'Текст не должен быть пустым'
            }}
            name='text'
            render={ ({ field: { value, onChange }, fieldState: { error } }) =>
              <>
                <textarea
                  className={ `add-form_input${ error ? ' invalidate' : '' }` }
                  placeholder="Текст"
                  onChange={ newValue => onChange(newValue) } />

                { error && <ErrorTip error={ error.message } /> }
              </>
            }
          />

          <button className="btn">Добавить</button>
        </div>
      </form>
    </>
  )
}

export default TodoAddForm