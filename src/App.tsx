import { Icon } from 'solid-heroicons';
import { trash } from 'solid-heroicons/outline';
import type { Component } from 'solid-js';
import { createSignal, For } from 'solid-js';

const App: Component = () => {
  type Task = {
    id: string;
    text: string;
    done: boolean;
  };

  const [tasks, setTasks] = createSignal<Task[]>([] as Task[]);

  const addTask = (e: Event) => {
    e.preventDefault(); //to prevent the default reload behavior when we submit our form.

    const taskInput = document.querySelector('#taskInput') as HTMLInputElement;

    const newTask: Task = {
      id: Math.random().toString(36).substr(2),
      text: taskInput.value,
      done: false,
    };

    setTasks([newTask, ...tasks()]);
    taskInput.value = '';
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks().filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div class='container mt-5 text-center text-neutral-700'>
      <h1 class='mb-4 text-2xl'>What to do</h1>
      <form
        onSubmit={(e) => addTask(e)}
        class='mb-5 flex justify-center space-x-2'>
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
        <For each={tasks()}>
          {(task: Task) => (
            <div class='flex justify-center space-x-2'>
              <button
                class='bg-orange-700 text-white text-sm px-2 rounded'
                onClick={() => deleteTask(task.id)}>
                <Icon path={trash} class='w-5 text-white' />
              </button>
              <div class='bg-slate-100 px-8 py-1 rounded'>{task.text}</div>
              <input
                type='checkbox'
                role='button'
                class='w-6'
                checked={task.done}
              />
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default App;
