document.getElementById("calcular").addEventListener("click", function() {
    const fck = document.getElementById("fck").value;
    const cimento = document.getElementById("cimento").value;
  
    const receitas = {
      // Aqui fica a lista de receitas já definidas 
  
        "15_MPACP_II": ["5 latas de brita", "5 latas de areia", "1 saco de cimento", "1 lata de água"],
        "20_MPACP_II": ["4,5 latas de brita", "4,5 latas de areia", "1 saco de cimento", "1 lata de água"],
        "25_MPACP_II": ["3,5 latas de brita", "4,5 latas de areia", "1 saco de cimento", "0,5 lata de água"],
        "30_MPACP_II": ["3 latas de brita", "4 latas de areia", "1 saco de cimento", "0,5 lata de água"],
        "35_MPACP_II": ["2,5 latas de brita", "3,5 latas de areia", "1 saco de cimento", "0,5 lata de água"],
        "15_MPACP_III": ["5 latas de brita", "5 latas de areia", "1,1 saco de cimento", "1 lata de água"],
        "20_MPA_CP_III": ["4,5 latas de brita", "4,5 latas de areia", "1,1 saco de cimento", "1 lata de água"],
        "25_MPA_CP_III": ["3,5 latas de brita", "4,5 latas de areia", "1 saco de cimento", "0,6 lata de água"],
        "30_MPA_CP_III": ["3 latas de brita", "4 latas de areia", "1 saco de cimento", "0,6 lata de água"],
        "35_MPA_CP_III": ["2,5 latas de brita", "3,5 latas de areia", "1 saco de cimento", "0,6 lata de água"],
        "15_MPA_CP_IV": ["5 latas de brita", "5 latas de areia", "1,1 saco de cimento", "1 lata de água"],
        "20_MPA_CP_IV": ["4,5 latas de brita", "4,5 latas de areia", "1,1 saco de cimento", "1 lata de água"],
        "25_MPA_CP_IV": ["3,5 latas de brita", "4,5 latas de areia", "1 saco de cimento", "0,6 lata de água"],
        "30_MPA_CP_IV": ["3 latas de brita", "4 latas de areia", "1 saco de cimento", "0,6 lata de água"],
        "35_MPA_CP_IV": ["2,5 latas de brita", "3,5 latas de areia", "1 saco de cimento", "0,6 lata de água"],
        "15_MPA_CP_V": ["6 latas de brita", "6 latas de areia", "1 saco de cimento", "1 lata de água"],
        "20_MPA_CP_V": ["5,5 latas de brita", "5,5 latas de areia", "1 saco de cimento", "1 lata de água"],
        "25_MPA_CP_V": ["4,5 latas de brita", "5 latas de areia", "1 saco de cimento", "0,5 lata de água"],
        "30_MPA_CP_V": ["4 latas de brita", "4,5 latas de areia", "1 saco de cimento", "0,5 lata de água"],       
    };
    
  
    //Obter a opção selecionada pelo usuário
   
  const op1=`${fck}${cimento}`
    const opcao2=receitas[op1];
    //Obter a opção selecionada pelo usuário
   /*
   const brita=`${receitas.value[0]}`;
   const areia=`${receitas.value[1]}`;
   const agua=`${receitas.value[3]}`;*/
    //Obter a proporção de materiais da opção selecionada
    /*const [brita, areia, agua] = `${receitas[op1]}`;*/
    
   /* const brita=`${opcao2[0]}`;
    const areia=`${opcao2[1]}`;
    const agua=`${opcao2[3]}`;
    let opcao = document.querySelector(`option[value="15_MPA"]`);
    let opcao3= opcao.value;
    let opcao2 =`${receitas[opcao3+"CP_II"]}`;
    let opt4=opcao2.split(",");*/
  
    const brita=`${opt4[0]}`;
      const areia=`${opt4[1]}`;
      const agua=`${opt4[3]}`;
  
    //Exibir o resultado na página
    const resultado = `Para um saco de cimento de ${cimento} kg, a proporção é ${brita} latas de brita, ${areia} latas de areia e ${agua} litros de água.`;
    document.getElementById("resultado").innerHTML = resultado;
      }
);
  
  
  
  
  
  