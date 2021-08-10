import {getCategoryList} from "../../services/categories/categories";

describe('menu item test',()=> {
    it('get categories list async', async () => {
        const mockData = [
            {id: 5, name: 'boxes'},
            {id: 15, name: 'clothes'},
            {id: 1, name: 'hats'},
            {id: 14, name: 'sinks'},
            {id: 2, name: 'space'},
            {id: 4, name: 'sunglasses'},
            {id: 7, name: 'ties'}
        ];
        expect.assertions(1);
      const data = await getCategoryList();
    expect(data).toEqual(mockData)
    });
});

