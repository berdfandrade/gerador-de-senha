


import React from "react";
import {
  Box,
  Button,
  NumberInput,
  Text,
  VStack,
  Center,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Fade,
  Flex,
  useClipboard
} from "@chakra-ui/react";

import {BiCopy, BiCopyAlt} from 'react-icons/bi'
import gerarSenha from "./funcaoGeraSenha";

function Gerador() {
  const [tamanho, setTamanho] = React.useState(6);
  const [senha, setSenha] = React.useState("");
  const [senhaGerada, setSenhaGerada] = React.useState(false); 
  const handleTamanhoChange = (value) => {
    setTamanho(value);
  };

  const handleGerarSenha = () => {
    const novaSenha = gerarSenha(tamanho);
    setSenha(novaSenha);
    setSenhaGerada(true); 
  };

  const { hasCopied, onCopy } = useClipboard(senha); 

  return (
    <Center h="100vh">
      <Box borderWidth={1} width={500} maxWidth="90%"borderRadius={10} p={4}>
        <VStack spacing={4} align="stretch">
          <Center p={1} flexDirection={"column"}>
            <Text fontSize="xl" color="gray.600"fontWeight="bold">
              Gerador de Senha
            </Text>
            <Text fontSize={"sm"} mb={3}>
              tamanho da senha:
            </Text>
            <NumberInput
              maxW={40}
              
              placeholder="Tamanho da senha"
              min={6}
              max={40}
              value={tamanho}
              onChange={handleTamanhoChange}
              mb={4}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button colorScheme="twitter" onClick={handleGerarSenha}>
              Gerar Senha
            </Button>
          </Center>
          {senhaGerada && (
            <Fade in>
              <Box>
                <Box
                  borderRadius="md"
                  height={50}
                  
                  borderWidth={1}
                  p={1}
                >
                  <Flex flexDirection={"row"} >
                    <Box
                      bg={"gray.200"}
                      p={2}
                      ml={1}
                      mt={1}
                      borderRadius={"md"}
                      fontSize={"xs"}
                      flexDirection={"column"}
                      color={"gray.500"}
                      mr={2}
                    >
                      Senha
                    </Box>
                    <Center maxWidth='90%'>
     
                      <Text
                        mt={1}
                        value={senha}
                        fontSize={senha.length >= 29 ? "x-small" : "md"}
                        color={"gray.700"}
                      >
                    
                        {senha}
                      </Text>
  
                    </Center>
                    <Button onClick={onCopy} ml="auto" >
                      {hasCopied ? <BiCopyAlt/> : <BiCopy/> }
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </Fade>
          )}
        </VStack>
      </Box>
    </Center>
  );
}

export default Gerador;