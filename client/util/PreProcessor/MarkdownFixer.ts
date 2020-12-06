export default class MarkdownFixer {
  process(markdown: string) {
    const x = markdown
      .replace(/^(#{1,})((?![\s#]+).+)$/gm, '$1 $2') // spacer for section
      .replace(/>[\s]*\n>[\s]*\n/g, '> <br>\n> \n')

    return x
  }
}
