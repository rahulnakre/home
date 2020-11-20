import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

{/* <i class="far fa-sun"></i> */}
import {} from "@fortawesome/react-fontawesome"

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <div>
      <Link href="https://twitter.com/rahul_nakree" title="Twitter" isExternal>
        <IconButton
          aria-label="Twitter"
          icon={<FontAwesomeIcon icon={faTwitter} />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/rahulnakre" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon={<FontAwesomeIcon icon={faGithub} />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/rahul-nakre-661417169/"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon={<FontAwesomeIcon icon={faLinkedinIn} />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:rahulnakre@gmail.com" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon={<FontAwesomeIcon icon={faEnvelope} />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </div>
    <div>
      <NextLink href="/uses" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Uses"
        >
          /uses
        </Link>
      </NextLink>
      <Link
        fontSize="sm"
        color="gray.500"
        minWidth="100px"
        mr={2}
        href="https://photos.leerob.io/"
        title="Photos"
        isExternal
      >
        /photos
      </Link>
      <NextLink href="/newsletter" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Newsletter"
        >
          /newsletter
        </Link>
      </NextLink>
    </div>
  </Flex>
);

export default Footer;