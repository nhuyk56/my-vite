
<script src="./Todo.js"/>
<template>
  <div class="h-100 w-full flex items-center justify-center bg-green-50 font-sans">
    <div class="bg-white rounded shadow p-6 m-4 w-full">
      <div class="mb-4">
        <h1 class="text-grey-darkest">Todo List</h1>
        <div class="flex mt-4">
          <input
            v-model="inputName"
            @enter="createItem(inputName)"
            class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo"
          />
          <button
            @click="createItem(inputName)"
            class="flex-no-shrink p-2 border-2 rounded text-text-green-400 border-text-green-400 hover:text-white hover:bg-green-400"
          >Add</button>
        </div>
      </div>
      <div>        
        <div v-for="todoItem in items" class="flex mb-4 items-center">
          <p class="w-full text-grey-darkest" :class="{ 'line-through': todoItem.status === 'done' }">{{ todoItem.name }}</p>
          <button @click="updateStatusItem(todoItem.id, 'not-done')" v-if="todoItem.status === 'done'" class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-gray-400">Not Done</button>
          <button @click="updateStatusItem(todoItem.id, 'done')" v-if="todoItem.status !== 'done'" class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-400">Done</button>
          <button @click="removeItem(todoItem.id)" class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-400">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>
