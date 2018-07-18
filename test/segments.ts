import {TwoColArticle} from "../src/TwoColArticle";
import {expect} from 'chai'

describe('2col article segments', () => {

  it('empty article', function () {
    // language=Markdown
    const article = new TwoColArticle('')
    expect(article.segments).to.have.length(0)
  });


  it('1 segment article', function () {
    // language=Markdown
    const article = new TwoColArticle('# test')
    expect(article.segments).to.have.length(1)
  });

  it('2 normal segments article', function () {
    // language=Markdown
    const article = new TwoColArticle('# test \np')
    expect(article.segments).to.have.length(1)
  })

  it('1 normal + 1 code segments article', function () {
    // language=Markdown
    const article = new TwoColArticle('# test \n```JavaScript\nconsole.log\n```')
    expect(article.segments).to.have.length(1)

  })

  it('2 code segment treat as an segment', () => {
    // language=Markdown
    const article = new TwoColArticle('```Python\nprint\n```\n```JavaScript\nconsole.log\n```')
    expect(article.segments).to.have.length(1)
  })

  it('3 code segment treat as an segment', () => {
    // language=Markdown
    const article = new TwoColArticle('```Python\nprint\n```\n```JavaScript\nconsole.log\n```\n```JavaScript\nconsole.log// again\n```')
    expect(article.segments).to.have.length(2)
  })

  it('4 code segment treat as an segment', () => {
    // language=Markdown
    const article = new TwoColArticle('```Python\nprint\n```\n```JavaScript\nconsole.log\n```\n```JavaScript\nconsole.log// again\n```\n\n```JavaScript\nconsole.log // again2\n```')
    expect(article.segments).to.have.length(2)
  })

  it('5 code segment treat as an segment', () => {
    // language=Markdown
    const article = new TwoColArticle('```Python\ncode =1\n```\n```JavaScript\ncode =2\n```\n```JavaScript\ncode =3\n```\n\n```JavaScript\ncode =4\n```\n\n```JavaScript\ncode =5\n```')
    expect(article.segments).to.have.length(3)
  })


  it('1 code + 1p + 1c => 1 segment', () => {
    // language=Markdown
    const article = new TwoColArticle('```Python\nprint\n```\na paragraph\n```JavaScript\nconsole.log\n```')
    expect(article.segments).to.have.length(1)
  })

  it('> text', () => {
    // language=Markdown
    const article = new TwoColArticle('> text')
    expect(article.segments).to.have.length(1)
  })
})
