# Sprint Challenge: Node DB Sprint

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Explain the difference between `Relational Databases` and `SQL`.
  A relational db a db where data is normalized and stored using rows where related data are stored as foreign keys.
  SQL or structured query language is a way to query for that day in the RDB

- [ ] Why do tables need a `primary key`?
  tables need a primary key for a unique value they can use to id with

- [ ] What is the name given to a table column that references the primary key on another table.
  foreign key

- [ ] What do we need in order to have a _many to many_ relationship between two tables.
  2 foreign keys

## Minimum Viable Product

- [ ] Design the data model and use _knex migrations_ to create the database and tables.
- [ ] Build an API with endpoints for:
  - [ ] adding resources.
  - [ ] retrieving a list of resources.
  - [ ] adding projects.
  - [ ] retrieving a list of projects.
  - [ ] adding tasks.
  - [ ] retrieving a list of tasks. **The list of tasks should include the project name and project description**.
- [ ] When returning `project` or `task` information, the `completed` property should be `true` or `false`.

For example, instead of returning a `task` that looks like this:

```js
{
  id: 1,
  name: 'convert to boolean',
  completed: 1 // the database stores a 1 to represent true values on a boolean field
}
```

The API should return:

```js
{
  id: 1,
  name: 'convert to boolean',
  completed: true // write code to convert the 1 to true and 0 to false
}
```

### Business Rules

- a `project` can have multiple `tasks`.
- a `task` belongs to only one `project`.
- a `project` can use multiple `resources`.
- the same `resource` can be used in multiple `projects`.
- when adding `projects` the client must provide a name, the description is optional.
- when adding `resources` the client must provide a name, the description is optional.
- when adding a `task` the client must provide a description, the notes are optional.
- when adding a `task` the client must provide the `id` of an existing project.
- for `projects` and `tasks` if no value is provided for the `completed` property, the API should provide a default value of `false`.

### Entities

A `project` is what needs to be done. We want to store the following data about a `project`:

- [ ] a unique Id.
- [ ] a name. This column is required.
- [ ] a description.
- [ ] a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be `false`.

A `resource` is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a `resource`:

- [ ] a unique Id.
- [ ] a name. This column is required.
- [ ] a description.

The database should not allow resources with duplicate names.

An `task` one of the steps needed to complete the project. We want to store the following data about an `task`.

- [ ] a unique id.
- [ ] a description of what needs to be done. This column is required.
- [ ] a notes column to add additional information.
- [ ] a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be `false`.

## Stretch Problem

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

Add an endpoint for retrieving a `project` by its `id` that returns an object with the following structure:

```js
{
  id: 1,
  name: 'project name here',
  description: 'the project description',
  completed: false, // or true, the database will return 1 for true and 0 for false
  tasks: [
    {
      id: 1,
      description: 'task description',
      notes: 'the task notes',
      completed: false // or true
    },
    {
      id: 7,
      description: 'another task description',
      notes: 'the task notes',
      completed: false // or true
    }
  ],
  resources: [
    {
      id: 1,
      name: 'Lambda Student',
      description: 'a soon to be hired developer'
    },
    {
      id: 2,
      name: 'MacBook Pro #1'
      description: 'an overly expensive laptop computer'
    }
  ]
}
```

Add the remaining CRUD operations for projects and tasks.

Use `knex` to add _data seeding_ scripts for projects and tasks.

Add support for the concept of `contexts`. A context is something like _at home_, _at work_ or _at computer_. The idea is that some tasks require one or more `contexts` in order to be worked on. For example, the task of _file income taxes_ may require that you are _at home_, _at computer_ and _online_ so if you are _at work_ and look at the list of pending tasks you could do in your current context, filing your taxes will not be one of them.

A `context` can be applied to more than one `task`. An task can be tied to more than one context, like in the example above.

When retrieving an `task` by _id_, add a property that lists all the `contexts` related to that task.

_Good luck and have fun!_
