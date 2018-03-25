# AngularJS
Task:
1. Add AngularJS 1.#.# to a project
	2. Add minimum functionality
		a. Add status(is it done or not) and date creation to todo model
b.Create a view displaying two lists of  todos: “Done todos” and “New todos”
C. Add filtering for todo list on base how old is the todo in days
	3. Add more functionality
		a. Add validation to the form
			i. Fields "Text" should be mandatory
			ii. Create a custom validator that check the minimum length of a todo text: 20 symbols.
		b. Reuse the form above to edit an article by clicking on article title
		C. Add sorting by first letter and by date
	4. Add routes and resource
		a. "Add todo"/"Edit todo" forms should be opened inside different views.
		b. Make sure that "Add todo"/"Edit todo" views have different routes, i.e.
			i. /admin/article/<todoId>/edit
			ii. /admin/article/add
	5. Load todos from external resource
c. Use Resource to make requests to a server
		D. Make todo.json load first todos from the file
