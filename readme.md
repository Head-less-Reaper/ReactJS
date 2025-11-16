# ReactJS :
developed by meta.
react is a library of JS used for building user interface. It automatically update the UI when data changes. It also uses a concept of virtual DOM.
It divides the webage into seprate components and then load them indivisually.
## Virtual Dom :
update the user interface efficiently by first applying changes to this virtual copy and then updating only the changed parts of the real DOM, instead of re-rendering the entire page.
## JSX:
Javascript + HTML
## Vite Bundler :
it starts the server instantly , only load the files which browser actually request, uses browser native ESM and also converts the JSX files into plain HTML,CSS, JS files that browser can understand.

In react you can only pass evaluated expressions and can perform basic calculation.You cannt write the whole logic like lopps and conditons in it.

state :It is an object that shows the current update data in the UI 

# Reconcillation :

props: a way to send data from a parentt component from parent component to a child component.

# useCallback() :
When your component re-renders, any functions you define inside it are created again—so they're new each time, even if their logic hasn't changed.
useCallback helps you “save” (cache) a function so React doesn’t make a new one after every render unless its data (called dependencies) changes.