var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Learn Bonjour' },
      { text: 'Build something awesome' }
    ]
  }
  
})
  app4.todos.push({ text: 'New item' })
  app4.todos.push({ text: 'New item 1' })
