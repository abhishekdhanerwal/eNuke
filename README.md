To run this project

    1)   npm install
    2)   npm start

To run unit test

    1) npm test


How can you limit the scope on a directive and why would you do this?

Scope of directive have access to scope of parent controller. We can limit the scope of directive in 3 ways -

        Shared Scope - (by default) in this the directive has the same scope as its parent controller
        Inherit Scope - directive to get its own scope and it inherites the parent controller scope
        Isolated Scope - it is completely detached from its parent scope. But we can communicate with the parent scope
                            using some special symbols.
                           '=' - pass object
                           '@' - pass string
                           '&' - pass function