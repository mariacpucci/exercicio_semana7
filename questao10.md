```
Função MultiplicacaoDeMatrizes(matrizA, matrizB):
    # Verifica se o número de colunas da matrizA é igual ao número de linhas da matrizB
    Se tamanho(matrizA[0]) ≠ tamanho(matrizB) então:
        Retornar "As matrizes não podem ser multiplicadas. O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda."

    linhasA <- tamanho(matrizA)
    colunasA <- tamanho(matrizA[0])
    colunasB <- tamanho(matrizB[0])
    matrizResultado <- novaMatriz(linhasA, colunasB)

    # Loop para calcular a multiplicação das matrizes
    Para i de 0 até linhasA-1 faça:
        Para j de 0 até colunasB-1 faça:
            soma <- 0
            Para k de 0 até colunasA-1 faça:
                soma <- soma + matrizA[i][k] * matrizB[k][j]
            matrizResultado[i][j] <- soma

    Retornar matrizResultado
```