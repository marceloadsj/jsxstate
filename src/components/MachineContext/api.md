## `MachineContext`

Standard React context instance created with **React.createContext**.

---

Check **TMachineContext** to see the type/signature of the Context:
[https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts](https://github.com/marceloadsj/jsxstate/blob/master/src/types.ts)

The React context used on the library works in a way you can access any store of the tree by its _machineId_.
That approach allows us to have control of the closest machine and the machines above that, so you can just target it in an easy way.

Always remember that the closest machine will be targeted if no _machineId_ is used.
Check the examples below to understand how it works.

### Examples:

```jsx
const userMachine = Machine({ id: 'user' /* ... */ })
const counterMachine = Machine({ id: 'counter' /* ... */ })

function Component() {
  return (
    <Interpret machine={userMachine}>
      {/* access to userMachine */}

      <Interpret machine={counterMachine}>
        {/* access to userMachine and counterMachine */}

        <Interpret machine={counterMachine} machineId='anotherCounter'>
          {/* access to userMachine, counterMachine and anotherCounter */}
        </Interpret>
      </Interpret>
    </Interpret>
  )
}
```
