import { Icon } from 'solid-heroicons';
import { trash } from 'solid-heroicons/outline';
import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class='container mt-5 text-center text-neutral-700'>
      <h1 class='mb-4 text-2xl'>What to do</h1>
      <form action='' class='mb-5 flex justify-center space-x-2'>
        <input
          type='text'
          class='px-2 py-1 w-48 border rounded'
          placeholder='Add task here...'
          id='taskInput'
          required
        />
        <button
          type='submit'
          class='p-1 w-24 bg-blue-700 text-white rounded'
          id='addTask'>
          Add task
        </button>
      </form>

      <div>
        <h4 class='text-xl mb-4'>Tasks</h4>
        <div class='flex justify-center space-x-2'>
          <button class='bg-orange-700 text-white text-sm px-2 rounded'>
            <Icon path={trash} class='w-5 text-white' />
          </button>
          <div class='bg-slate-100 px-2 py-1 rounded'>Push code to github</div>
          <input type='checkbox' role='button' class='w-6' />
        </div>
      </div>
    </div>
  );
};

export default App;
