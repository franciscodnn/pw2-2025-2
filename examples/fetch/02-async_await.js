function sumPromise(a, b) {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b))
      reject('Invalid numbers');
    else
      setTimeout(() => resolve(a + b), 2000);
  });
 
  return promise
}

async function sumAsync(a, b) {
  const sleep = (m) => new Promise(r => setTimeout(r, m))
 
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid numbers');
  } else {
    await sleep(2000);
    return a + b;
  }
}

async function result() {
  try {
    const res = await sumPromise(2, 2);
    console.log('Resolvida a primeira promessa');
    
    return await sumAsync(2, res);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(err);
    }
  }
}

result()
.then(resultado => console.log(resultado))
.catch(err => console.log(err));