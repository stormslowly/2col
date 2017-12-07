import {TwoColArticle} from "../src/TwoColArticle";
import {expect} from 'chai'

describe('2col article segments', () => {

  it('empty article', function () {
    const article = new TwoColArticle('')

    expect(article.segments).to.have.length(0)
  });


  it('1 segment article', function () {
    const article = new TwoColArticle('#test test')

    expect(article.segments).to.have.length(1)
  });
})
