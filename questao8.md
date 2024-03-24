```
Classe FormaGeometrica:
    Atributos:
        - cor

    Método Construtor(cor):
        Define o valor do atributo cor com o valor passado como parâmetro.

    Método CalcularArea():
        # Implementação genérica para cálculo de área, a ser sobrescrita pelas subclasses.

Classe Retangulo herda de FormaGeometrica:
    Atributos:
        - largura
        - altura
    
    Método Construtor(cor, largura, altura):
        Super(cor)
        Define o valor do atributo largura com o valor passado como parâmetro.
        Define o valor do atributo altura com o valor passado como parâmetro.
        
    Método CalcularArea():
        Retorna largura * altura

Classe Ciruculo herda de FormaGeometrica:
    Atributos:
        - raio

    Método Construtor(cor):
        Super(cor)
        Define o valor do atributo raio com o valor passado como parâmetro.

        Método CalcularArea():
        Retorna 3.14159 * raio * raio


```