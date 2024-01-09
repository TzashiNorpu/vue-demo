<script setup>
import {UserServiceIns} from '../services';

const handler1 = async () => {
  let res = await UserServiceIns.login({name: "norpu", passwd: "123", verify_code: "hqlw"});
  console.log("res", res);
}
const handler2 = async () => {
  let res = await UserServiceIns.register();
  console.log("res", res);
}
</script>

<template>
  <main>
    <button @click="handler1">click1</button>
    <button @click="handler2">click2</button>
  </main>
</template>
