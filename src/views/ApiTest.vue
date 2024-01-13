<script setup>
import {UserServiceIns} from '../services';

const handler1 = async () => {
  let res = await UserServiceIns.login({username: "tsering", password: "123"});
  console.log("res", res);
}
const handler2 = async () => {
  let res = await UserServiceIns.register({username: "tsering", password: "123", deptId: 123, orgId: 456});
  console.log("res", res);
}
</script>

<template>
  <main>
    <button @click="handler1">click1</button>
    <button @click="handler2">click2</button>
  </main>
</template>
