/**
 * @author sripal
 */
$(document).ready(function() {
    var form = $('form#testForm'),
        taskName = $('#taskName'),
        taskDate = $('#date'),
        assignee = $('#assignedTo'),
        taskListTable = $('#taskListTable > tbody:first-child'),
        tableRow;

    /*$.ajax({
        url: 'data/data.json',
        method: 'GET',
        dataType: 'json'
    }).done(function(data) {
			console.log(data);			        
    });*/
	
	var tasksList=[
				  {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe"},
				  {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe"},
				  {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe"},
				  {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe"},
				  {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe"},
				  {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe"},
				  {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe"}
				  
				  ];
				
		for(var i = 0; i < tasksList.length; i++) {
            tableRow = '<tr>' +
                '<td>'+'<b>' + tasksList[i].name +'</b>'+  '<span>' + tasksList[i].date +
                '</span>'+
                '</td>' +
                '<td class="assignedRight">' + '<b>'+tasksList[i].assigned +'</b>'+
                '</td>' +
                '</tr>';
            
            taskListTable.prepend(tableRow);
        }
	
	

    form.submit(function(event) {
        event.preventDefault();

        var formObject = {
                name: taskName.val(),
                date: taskDate.val(),
                assigned: assignee.val()
            },
            formJSON;
        console.log(formObject);
        formJSON = JSON.stringify(formObject);
        tableRow = '<tr>' +
            '<td>' +'<b>'+ formObject.name +'</b>'+' '+'<span>' + formObject.date +
            '</span>'+
            '</td>' +
            '<td class="assignedRight">' +'<b>'+ formObject.assigned +'</b>'+
            '</td>' +
            '</tr>';
        taskListTable.prepend(tableRow);
        console.log(formJSON);
        console.log(tableRow);
    });
});