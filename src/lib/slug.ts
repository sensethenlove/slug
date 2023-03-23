export default (value: string): string => {
  let response = ''

  if (value) {
    response = value.toLowerCase()
      .replace(/[\,\.\:\?\!\½\)\(\@\#\$\%\^\&\*\;\'\"\{\}\[\]\\\|\/\`\~\<\>\_\=\+]/g, '')
      .trim()
      .replace(/\s/g, '-')
  }

  return response
}
