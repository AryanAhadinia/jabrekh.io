import {
  Box,
  Image,
  Text,
  Link,
  Grid,
  Tag,
  VStack,
  HStack,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight, FaInfoCircle } from "react-icons/fa";

const CourseInfo = () => {
  return (
    <Box display="flex" flexDirection="row">
      <Box flex="9">
        <VStack spacing="6" align="stretch">
          <HStack spacing="2">
            <Text fontSize="3xl" fontWeight="bold">
              CE282:
            </Text>
            <Text fontSize="3xl" fontWeight="bold">
              Linear Algebra
            </Text>
          </HStack>
          <Flex
            direction={{
              base: "column",
              lg: "row",
            }}
            align={{
              base: "flex-start",
              lg: "center",
            }}
            justify="flex-start"
            wrap="wrap"
          >
            <Tag fontSize="sm" style={{ backgroundColor: `#d05a45` }} m={1}>
              Spring 2023
            </Tag>
            <Tag fontSize="sm" style={{ backgroundColor: "#e4aa42" }} m={1}>
              Group 1
            </Tag>
            <Tag fontSize="sm" style={{ backgroundColor: "#3f6ee7" }} m={1}>
              Computer Engineering Department
            </Tag>
            <Tag fontSize="sm" style={{ backgroundColor: "#4a9c80" }} m={1}>
              Sharif University of Technology, Tehran, Tehran Province, Iran
            </Tag>
          </Flex>
          <Text fontSize="lg" fontWeight="bold">
            <HStack>
              <FaInfoCircle />
              <Text>Classes:</Text>
            </HStack>
          </Text>
          <Text fontSize="md" fontWeight="bold">
            Sunday and Tuesday, 10:30-12:00
          </Text>
          <Text fontSize="md" fontWeight="bold">
            Education Tower 306
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            <HStack>
              <FaInfoCircle />
              <Text>TA Classes:</Text>
            </HStack>
          </Text>
          <Text fontSize="md" fontWeight="bold">
            TBA
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            <HStack>
              <FaInfoCircle />
              <Text>Course Description:</Text>
            </HStack>
          </Text>
          <Text fontSize="md" as={"samp"} textAlign="justify">
            This course covers matrix theory and linear algebra, emphasizing
            topics useful in other disciplines. Linear algebra is a branch of
            mathematics that studies systems of linear equations and the
            properties of matrices. The concepts of linear algebra are extremely
            useful in image processing, computer vision, data science, machine
            learning, bio-informatics, social networks, and neuroscience. Due to
            its broad range of applications, linear algebra is one of the most
            widely taught subjects in college-level mathematics.
          </Text>
          <Link href="#" colorScheme="blue" fontWeight="bold">
            Syllabus
          </Link>
        </VStack>
      </Box>
    </Box>
  );
};

export default CourseInfo;
