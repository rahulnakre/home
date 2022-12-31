import React, { FC } from "react";
import { Flex, Heading, Box, Text, useColorMode, Link } from "@chakra-ui/react";
import NextLink from 'next/link';


interface PostLinkProps {
  title: string,
  excerpt: string;
  href: string;
  key: string;
}

const PostLink:FC<PostLinkProps> = ({ title, excerpt, ...linkProps }) => { 
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <NextLink {...linkProps} passHref>
      <Box 
        mb={8} 
        display="block" 
        width="100%" 
        _hover={{
          color: "blue.500",
          cursor: "pointer",
          textDecoration: "underline"
        }}
        borderRadius='10px'
        padding="10px"
      >
        <Flex
          width="100%"
          align="flex-start"
          justifyContent="space-between"
          flexDirection={['column', 'row']}
        >
          <Heading size="md" as="h3" mb={2} fontWeight="medium">
            {title}
          </Heading>
        </Flex>
        <Text color={secondaryTextColor[colorMode]}>
          {excerpt}
        </Text>
      </Box>
    </NextLink>
  )
}

export default PostLink;