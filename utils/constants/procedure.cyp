call apoc.load.json("file://D:/filteredJSON.json") yield value
unwind value.items as p
merge (professor:Professor {nome: p.identificacao.nome_completo})
foreach (i in p.idiomas.idioma | merge (idioma:Idioma {nome:i.nome}) MERGE (professor)-[:conhece {proficiencia: i.proficiencia}]->(idioma))
foreach (fa in p.formacao_academica.formacao | merge (formacao:FormacaoAcademica {tipo:fa.tipo}) MERGE (professor)-[:graduado {nome_instituicao: fa.nome_instituicao}]->(formacao))
foreach (p in p.projetos_pesquisa.projeto | merge (projeto:ProjetoPesquisa {nome:p.nome, descricao: p.descricao}) MERGE (professor)-[:realizou]->(projeto))
foreach (area in p.area_atuacao.descricao | merge (areaAtuacao:AreaAtuacao {nome:area}) MERGE (professor)-[:atua]->(areaAtuacao))
foreach (o in p.orientacao_tcc_concluido.tcc 
        | merge (orientacaoTCC:Orientacao { tituloTrabalho:o.titulo_trabalho, tipo: "TCC" }) 
          MERGE (professor)-[:orientou]->(orientacaoTCC))
foreach (oIc in p.orientacao_iniciacao_cientifica_concluido.iniciacao_cientifica 
        | merge (orientacaoIC:Orientacao { tituloTrabalho:oIc.titulo_trabalho, tipo: "IC" }) 
          MERGE (professor)-[:orientou]->(orientacaoIC))