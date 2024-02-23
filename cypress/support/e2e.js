//commands UI

import './/commands_blog_agi.js'


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`
    addContext({ test }, `../screenshots/${Cypress.spec.name}/${screenshotFileName}`)
  }
  else {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} -- after each hook.png`
    addContext({ test }, `../screenshots/${Cypress.spec.name}/${screenshotFileName}`)
  }
})