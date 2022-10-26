$(()=>{
    //console.log("hello");
    const clearMsg = $("#msg").text("");

    const addSuccess = (result) => {
        $("#question").val(result);
        $("#msg").text("Data added successfully.");
        setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server.");
        setTimeout(clearMsg, 10000);
    }
    $("#add").submit(()=>{
        const data = {
          question : $("#question").val()
        };
    $.post({
        url : "/add",
        data : JSON.stringify(data),
        contentType: "application/json; charset=utf-8"

    }).done(addSuccess)
    .fail(noSuccess);

    return false;

    });
});