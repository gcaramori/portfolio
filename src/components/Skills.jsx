import React, { useContext } from "react";
import { Heading, Text, Flex, Image, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LanguageContext } from "../contexts/languageContext";
import Languages from "../lib/languages";

const Skills = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Flex
      id="skills"
      h={{ base: "auto", xl: "100vh" }}
      w="100%"
      flexDir={{ base: "column", xl: "row" }}
      justifyContent="flex-start"
      alignItems={{ base: "flex-start", xl: "center" }}
      overflow="hidden"
    >
      <Flex
        h="100%"
        w={{ base: "100%", xl: "40%" }}
        flexDir="column"
        justifyContent={{ base: "space-between", xl: "center" }}
        alignItems={{ base: "flex-end", xl: "flex-start" }}
        p={{ base: 6, xl: 10, "2xl": 20 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: 50, "2xl": 60 }}
            textTransform="uppercase"
            maxW="800px"
          >
            Skills
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Text
            fontSize={25}
            color="gray.500"
            textAlign={{ base: "right", xl: "left" }}
            dropShadow="(0 10px 8px rgb(0 0 0 / 0.04))(0 4px 3px rgb(0 0 0 / 0.1))"
            mt={{ base: 3, xl: 15 }}
          >
            {Languages[language]?.skills?.subtitle}
          </Text>
        </motion.div>
      </Flex>

      <Flex
        h="100%"
        w={{ base: "100%", xl: "60%" }}
        justifyContent={{ base: "space-between", xl: "center" }}
        alignItems="center"
        flexDirection="column"
        p={{ base: 6, xl: 10, "2xl": 20 }}
        position="relative"
        gap={{ base: 8, xl: 15 }}
      >
        <Flex
          justifyContent={{ base: "space-between", xl: "center" }}
          h="30%"
          w="100%"
          gap={{ base: 20, xl: 100 }}
        >
          <Box>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                h="auto"
                w={{ base: "140px", xl: "150px" }}
                fit="contain"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                alt="next_logo"
              />
            </motion.div>
          </Box>

          <Box>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                h="auto"
                w={{ base: "140px", xl: "150px" }}
                fit="contain"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="javascript_logo"
              />
            </motion.div>
          </Box>

          <Box>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                h="auto"
                w={{ base: "140px", xl: "150px" }}
                fit="contain"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg"
                alt="nest_logo"
              />
            </motion.div>
          </Box>
        </Flex>

        <Flex
          justifyContent={{ base: "space-between", xl: "center" }}
          h="30%"
          w="100%"
          gap={{ base: 20, xl: 100 }}
        >
          <Box>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                h="auto"
                w={{ base: "140px", xl: "150px" }}
                fit="contain"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs_logo"
              />
            </motion.div>
          </Box>

          <Box>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                h="auto"
                w={{ base: "140px", xl: "150px" }}
                fit="contain"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                alt="php_logo"
              />
            </motion.div>
          </Box>

          <Box>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                h="auto"
                w={{ base: "140px", xl: "150px" }}
                fit="contain"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                alt="tailwindcss_logo"
              />
            </motion.div>
          </Box>
        </Flex>

        <Flex
          justifyContent={{ base: "space-between", xl: "center" }}
          h="30%"
          w="100%"
          gap={{ base: 20, xl: 100 }}
        >
          <Box>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                h="auto"
                w={{ base: "140px", xl: "150px" }}
                fit="contain"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongo_logo"
              />
            </motion.div>
          </Box>

          <Box>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                h="auto"
                w={{ base: "140px", xl: "150px" }}
                fit="contain"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql_logo"
              />
            </motion.div>
          </Box>

          <Box>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                h="auto"
                w={{ base: "140px", xl: "150px" }}
                fit="contain"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg"
                alt="docker_logo"
              />
            </motion.div>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Skills;
