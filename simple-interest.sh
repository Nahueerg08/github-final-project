   #!/bin/bash
   # Este script calcula el interés simple dado el capital,
   # la tasa de interés anual y el período de tiempo en años.

   # No usar esto en producción. Solo para fines de ejemplo.

   # Autor: Nahuel Cestau
   # Autores adicionales:
   # github.com/Nahueerg08

   # Entrada:
   # p, monto principal
   # t, período de tiempo en años
   # r, tasa de interés anual

   # Salida:
   # interés simple = p*t*r

   echo "Ingresa el capital:"
   read p
   echo "Ingresa la tasa de interés por año:"
   read r
   echo "Ingresa el período de tiempo en años:"
   read t

   s=`expr $p \* $t \* $r / 100`
   echo "El interés simple es: "
   echo $s
