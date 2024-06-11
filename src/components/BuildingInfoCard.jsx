import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

const BuildingInfoCard = ({ building }) => {
  if (!building) {
    return null;
  }

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" boxShadow="lg">
      <VStack align="start" spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">{building.name}</Text>
        <Text>Temperature: {building.temperature}°C</Text>
        <Text>Humidity: {building.humidity}%</Text>
        <Text>CO2 Levels: {building.co2} ppm</Text>
      </VStack>
    </Box>
  );
};

export default BuildingInfoCard;