$.ajax({
  url: '../AlocacaoEAD.csv',
  dataType: 'text',
}).done(successFunction);

function successFunction(data) {
var allRows = data.split(/\r?\n|\r/);
var table = '<div id="conteudo"><table id="tabela">';
for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
  if (singleRow === 0) {
    table += '<thead>';
    table += '<tr class="titulo">';
  } else {
    table += '<tr>';
  }
  var rowCells = allRows[singleRow].split(';');
  for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
    if (singleRow === 0) {
      table += '<th>';
      table += rowCells[rowCell];
      table += '</th>';
    } else {
      table += '<td>';
      table += rowCells[rowCell];
      table += '</td>';
    }
  }
  if (singleRow === 0) {
    table += '</tr><tr class="proc"><th><input class="th"></th><th><input class="th"></th><th><input class="th"></th><th><input class="th"></th><th><input class="th"></th></tr>';
    table += '</thead>';
    table += '<tbody>';
  } else {
    table += '</tr>';
  }

} 
table += '</tbody>';
table += '</div></table>';
$('body').append(table);

$("table input").keyup(function(){       
    var index = $(this).parent().index();
    var nth = "table td:nth-child("+(index+1).toString()+")";
    var valor = $(this).val().toUpperCase();
    $("table tbody tr").show();
    $(nth).each(function(){
        if($(this).text().toUpperCase().indexOf(valor) < 0){
            $(this).parent().hide();
        }
    });
});

$("table input").blur(function(){
    $(this).val("");
});
};