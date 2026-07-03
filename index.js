const { Analytics } = require('@segment/analytics-node')

const analytics = () => new Analytics({
  flushAt: 1,
  writeKey: 'lgaW2cWzhgfWLok2dblR7chRcACnYWM9'
})


const handler = async (event) => {
  const identifyBody = {
    userId: 'joey',
    traits: {
      name: 'Joey',
      email: 'joey@test.com'
    }
  }
  await new Promise((resolve) =>
    {
      const res = analytics().identify(identifyBody, resolve)
      console.log(res)
    }
  )

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello World!'),
  };
  return response;
};

handler();
