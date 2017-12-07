import {TwoColArticle} from "../src/TwoColArticle";
import {expect} from 'chai'

describe('2col article segments', () => {

  it('empty article', function () {
    const article = new TwoColArticle('')

    expect(article.segments).to.have.length(0)
  });


  it('1 segment article', function () {
    const article = new TwoColArticle('# test')

    expect(article.segments).to.have.length(1)
  });

  it('2 normal segments article', function () {
    const article = new TwoColArticle('# test \np')

    expect(article.segments).to.have.length(2)
  })

  it('1 normal + 1 code segments article', function () {
    const article = new TwoColArticle('# test \n```JavaScript\nconsole.log\n```')
    expect(article.segments).to.have.length(2)
  })

  it('2 code segment treat as an segment', () => {
    const article = new TwoColArticle('```Python\nprint\n```\n```JavaScript\nconsole.log\n```')
    expect(article.segments).to.have.length(1)
  })

  it('1 code + 1p + 1c => 3 segment', () => {
    const article = new TwoColArticle('```Python\nprint\n```\n```JavaScript\nconsole.log\n```')
    expect(article.segments).to.have.length(1)
  })


})
