const titleValidation = (formTitle: string): string => {
  if (!formTitle) return 'タイトルを入力してください'
  return ''
}

const bodyValidation = (formBody: string): string => {
  if (!formBody) return '本文を入力してください'
  return ''
}

class Validation {
  static formValidate = (type: string, value: string) => {
    switch (type) {
      case 'formTitle':
        return titleValidation(value)
      case 'formBody':
        return bodyValidation(value)
    }
  }
}

export default Validation;
