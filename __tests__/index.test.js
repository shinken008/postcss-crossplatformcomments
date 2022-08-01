'use strict'
const postcss = require('postcss')
const crossPlatform = require('../index')

describe('value parsing', function () {
  it('1 should persist the h5 platform css',
    function () {
      const options = {
        platform: 'h5',
      }
      const rules = '/*  #ifdef  h5  */ h1 {color: red;}/*  #endif  */'
      const expected = '/*  #ifdef  h5  */ h1 {color: red;}/*  #endif  */'
      const processed = postcss(crossPlatform(options)).process(rules).css

      expect(processed).toBe(expected)
    }
  )
  it('2 should remove the extraneous h5 platform css',
    function () {
      const options = {
        platform: 'h5',
      }
      const rules = '/*  #ifndef  h5  */ h1 {color: red;}/*  #endif  */'
      const expected = '/*  #ifndef  h5  *//*  #endif  */'
      const processed = postcss(crossPlatform(options)).process(rules).css

      expect(processed).toBe(expected)
    }
  )
  it('3 should persist the h5 platform css with a array platform option',
    function () {
      const options = {
        platform: ['h5'],
      }
      const rules = '/*  #ifdef  h5  */ h1 {color: red;}/*  #endif  */'
      const expected = '/*  #ifdef  h5  */ h1 {color: red;}/*  #endif  */'
      const processed = postcss(crossPlatform(options)).process(rules).css

      expect(processed).toBe(expected)
    }
  )
  it('4 should persist the h5 and weapp platform css',
    function () {
      const options = {
        platform: ['h5', 'weapp'],
      }
      const rules = '/*  #ifdef  h5  */ h1 {color: red;}/*  #endif  *//*  #ifdef  weapp  */ h1 {color: red;}/*  #endif  */'
      const expected = '/*  #ifdef  h5  */ h1 {color: red;}/*  #endif  *//*  #ifdef  weapp  */ h1 {color: red;}/*  #endif  */'
      const processed = postcss(crossPlatform(options)).process(rules).css

      expect(processed).toBe(expected)
    }
  )
  it('5 should remove the extraneous h5 and weapp platform css',
    function () {
      const options = {
        platform: ['h5', 'weapp'],
      }
      const rules = '/*  #ifndef  h5  */ h1 {color: red;}/*  #endif  *//*  #ifndef  weapp  */ h1 {color: red;}/*  #endif  */'
      const expected = '/*  #ifndef  h5  *//*  #endif  *//*  #ifndef  weapp  *//*  #endif  */'
      const processed = postcss(crossPlatform(options)).process(rules).css

      expect(processed).toBe(expected)
    }
  )
})
