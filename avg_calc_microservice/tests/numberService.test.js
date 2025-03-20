const numberService = require('../src/services/numberService');
const apiClient = require('../src/utils/apiClient');

// Mock the API client
jest.mock('../src/utils/apiClient');

describe('NumberService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should process prime numbers correctly', async () => {
        apiClient.fetchNumbers.mockResolvedValue([2, 3, 5, 7]);

        const result = await numberService.processNumber('p1');
        
        expect(result).toHaveProperty('windowPrevState');
        expect(result).toHaveProperty('windowCurrState');
        expect(result).toHaveProperty('numbers');
        expect(result).toHaveProperty('avg');
        expect(result.numbers).toContain(2);
    });

    test('should handle invalid number type', async () => {
        await expect(numberService.processNumber('x1')).rejects.toThrow('Invalid number type identifier');
    });

    test('should handle API errors', async () => {
        apiClient.fetchNumbers.mockRejectedValue(new Error('API Error'));

        await expect(numberService.processNumber('p1')).rejects.toThrow('API Error');
    });
}); 