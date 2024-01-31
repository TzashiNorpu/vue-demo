<script setup>
import {UserServiceIns, RoleServiceIns} from '../services';

const handler1 = async () => {
  let res = await UserServiceIns.login({username: "tsering", password: "123"});
  console.log("res", res);
}
const handler2 = async () => {
  let res = await UserServiceIns.register({username: "tsering", password: "123", deptId: 123, orgId: 456});
  console.log("res", res);
}

const handler3 = async () => {
  let res = await RoleServiceIns.add({name: 'admin', nameZh: '管理员'});
  console.log("res", res);
}

const handler4 = async () => {
  let res = await UserServiceIns.addUserRole({userId: 1746811772191453186n, roleId: 1747064119865974786n});
  console.log("res", res);
}
</script>

<template>
  <main>
    <button @click="handler1">login</button>
    <button @click="handler2">add user</button>
    <button @click="handler3">add role</button>
    <button @click="handler4">add user's role</button>
  </main>
</template>
