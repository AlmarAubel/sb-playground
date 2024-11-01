import { fakerEN as faker } from '@faker-js/faker'

export const getUser = async () => {
  await sleep(20);
  console.log('📞called User api')
  return { name: faker.person.fullName() }
}


export const getCompany = async () => {
  await sleep(20);
  console.log('📞 called Company api')
  return { name: faker.company.name() }
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
