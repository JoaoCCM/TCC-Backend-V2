call apoc.load.json("file://D:/filteredJSON.json") yield value

unwind value.items as p
  MERGE (professor:Professor {nome: p.identificacao.nome_completo })
  ON CREATE SET professor.foto = p.identificacao.foto, professor.id = p.identificacao.id, professor.email = p.identificacao.email
  ON MATCH SET professor.foto = p.identificacao.foto, professor.id = p.identificacao.id, professor.email = p.identificacao.email

foreach (i in p.idiomas.idioma 
  | MERGE (idioma:Idioma {nome: i.nome}) 
    MERGE (professor)-[relacao:temConhecimento]->(idioma)
      ON CREATE SET relacao.proficiencia = i.proficiencia
      ON MATCH SET relacao.proficiencia = i.proficiencia
    )

foreach (fa in p.formacao_academica.formacao 
  | MERGE (formacao:FormacaoAcademica {tipo: fa.tipo}) 
  MERGE (professor)-[:formado {nome_instituicao: fa.nome_instituicao}]->(formacao))

foreach (p in p.projetos_pesquisa.projeto 
  | MERGE (projeto:ProjetoPesquisa {nome: p.nome, descricao: p.descricao}) 
    ON CREATE SET projeto.descricao = p.descricao
    ON MATCH SET projeto.descricao = p.descricao
  MERGE (professor)-[:realizou]->(projeto))

foreach (area in p.area_atuacao.descricao 
  | MERGE (areaAtuacao:AreaAtuacao {nome: area}) 
  MERGE (professor)-[:atua]->(areaAtuacao))

foreach (o in p.orientacao_tcc_concluido.tcc 
  | MERGE (orientacaoTCC:Orientacao { tituloTrabalho: o.titulo_trabalho, tipo: "TCC" }) 

    MERGE (professor)-[:orientou]->(orientacaoTCC))

foreach (oIc in p.orientacao_iniciacao_cientifica_concluido.iniciacao_cientifica 
  | MERGE (orientacaoIC:Orientacao { tituloTrabalho: oIc.titulo_trabalho, tipo: "IC" }) 
    MERGE (professor)-[:orientou]->(orientacaoIC))