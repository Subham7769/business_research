import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: initialState,
  reducers: {
    setCurrentProduct(state, action) {
      state.currentProductId = action.payload;
    },
    createNewProduct(state, action) {
      const { productName, hsCode, Reasons } = action.payload;
      // Generate a unique ID for the new product
      const id = Math.floor(Math.random() * 10000000000);
      // Create the new product object
      const newProduct = {
        productId: id,
        productName: productName,
        hsCode: hsCode,
        selectionReason: Reasons,
        swot: {
          strength: ["strength"],
          weakness: ["weakness"],
          opportunity: ["opportunity"],
          threat: ["threat"],
        },
        knowledgeBase: {
          description: "",
          varieties: [
            {
              name: "",
              code: "",
              priceRange: "",
              testing: "",
              specification: {
                Physical_Properties: [],
                Chemical_Properties: [],
                Technical_Properties: [],
                Other_Properties: [],
              },
              productionHub: [
                {
                  state: "Enter State",
                  city: "Enter City",
                  townVillage: "Enter Town/Village",
                  season: "Enter Season",
                },
              ],
            },
          ],
          evaluationCriteria: {
            Testing: [],
            Standards: [],
            Quality: [],
            Packing: [],
          },
          CredentialCollection: {
            Certificates: [],
            Licenses: [],
            Documents: [],
          },
          EPC: "",
          RCMC: "",
          ApplicationUsecase: {
            Applications: [],
          },
        },
      };
      state.currentProductId = id;
      // Add the new product to the state
      state.products.push(newProduct);
    },
    updateSwot(state, action) {
      const { swot } = action.payload;
      const Index = state.products.findIndex(
        (product) => product.productId === state.currentProductId
      );
      const product = state.products.find(
        (product) => product.productId === state.currentProductId
      );
      if (Index !== -1) {
        product.swot = { ...product.swot, ...swot };
        const allProducts = [...state.products];
        allProducts[Index] = product;
        state.products = [...allProducts];
        alert("Swot updated successfully");
      }
    },
  },
});

export const { setCurrentProduct, createNewProduct,updateSwot } = ProductSlice.actions;
export default ProductSlice.reducer;
