```
INICIO
    DEFINA:
    velocidade_inicial,
    aceleracao, 
    velocidade_maxima, 
    distancia_corrida, 
    tempo_maximo
    LEIA: 
    velocidade_inicial, 
    aceleracao, 
    velocidade_maxima, 
    distancia_corrida, 
    tempo_maximo

    DEFINA velocidade_atual = velocidade_inicial
    DEFINA tempo = 0
    DEFINA distancia_percorrida = 0

    ENQUANTO distancia_percorrida < distancia_corrida E tempo < tempo_maximo
        SE velocidade_atual < velocidade_maxima ENTÃO
            velocidade_atual = velocidade_atual + aceleracao
            SE velocidade_atual > velocidade_maxima ENTÃO
                velocidade_atual = velocidade_maxima
            FIM SE
        FIM SE
        
        distancia_percorrida = distancia_percorrida + velocidade_atual
        tempo = tempo + 1

        SE distancia_percorrida >= distancia_corrida OU tempo >= tempo_maximo ENTÃO
            SAIA DO LAÇO
        FIM SE
    FIM ENQUANTO

    SE tempo >= tempo_maximo E distancia_percorrida < distancia_corrida ENTÃO
        ESCREVA "A corrida não pode ser completada no tempo máximo."
    SENÃO
        ESCREVA "O carro completou a corrida em " + tempo + " minutos."
    FIM SE
FIM
```