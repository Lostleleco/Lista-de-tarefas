$(document).ready(function() {
    $("#btnIncluir").click(function() {
        var tarefa = $("#tarefas").val().trim();
        if (tarefa === "") {
            alert("Por favor, insira uma tarefa!");
            return;
        }

        $("#listaTarefas").append("<li>" + tarefa + "</li>");
        $("#tarefas").val(""); // Limpa o campo de entrada após adicionar a tarefa
    });

    $(document).on("click", "#listaTarefas li", function() {
        $(this).toggleClass("concluida");
    });

    $("#btnReiniciar").click(function() {
        $("#listaTarefas").empty();
    });
});
