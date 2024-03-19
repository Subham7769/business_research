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
                Physical_Properties: [
                  {
                    name: "Physical_Properties",
                    data: "data"
                  },
                ],
                Chemical_Properties: [
                  {
                    name: "Chemical_Properties",
                    data: "data"
                  },
                ],
                Technical_Properties: [
                  {
                    name: "Technical_Properties",
                    data: "data"
                  },
                ],
                Other_Properties: [
                  {
                    name: "Other_Properties",
                    data: "data"
                  },
                ],
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
          credentialCollection: {
            Certificates: [],
            Licenses: [],
            Documents: [],
          },
          EPC: "",
          RCMC: "",
          applicationUseCase: {
            Applications: ["Applications"],
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
    updateDescription(state,action){
      const { Description } = action.payload;
      const product = state.products.find(product => product.productId === state.currentProductId)
      const Index = state.products.findIndex(product => product.productId === state.currentProductId)
      product.knowledgeBase.description = Description;
      const allProducts = [...state.products];
      allProducts[Index] = product;
      state.products = [...allProducts];
      alert("Description updated successfully");
    },
    // updateVariety(state,action){
    //   const { varieties } = action.payload;
    //   const product = state.products.find(product => product.productId === state.currentProductId)
    //   const Index = state.products.findIndex(product => product.productId === state.currentProductId)
    //   const allProducts = [...state.products];
    //   allProducts[Index] = product;
    //   state.products = [...allProducts];
    //   alert("Variety updated successfully");
    // },
    updateVariety(state, action) {
      const { varieties } = action.payload;
      const productIndex = state.products.findIndex(product => product.productId === state.currentProductId);
      if (productIndex !== -1) {
        state.products[productIndex].knowledgeBase.varieties = varieties;
        alert("Variety updated successfully");
      }
    },
    updateEPC_RCMC(state, action) {
      const { EPC, RCMC } = action.payload;
      console.log(EPC, RCMC)
      const productIndex = state.products.findIndex(product => product.productId === state.currentProductId);
      if (productIndex !== -1) {
        state.products[productIndex].knowledgeBase.EPC = EPC;
        state.products[productIndex].knowledgeBase.RCMC = RCMC;
        alert("EPC & RCMC updated successfully");
      }
    },
    updateEvaluationCriteria(state, action) {
      const { evaluationCriteria } = action.payload;
      const productIndex = state.products.findIndex(product => product.productId === state.currentProductId);
      if (productIndex !== -1) {
        state.products[productIndex].knowledgeBase.evaluationCriteria = evaluationCriteria;
        alert("Product Testing, Standard, Quality, Packing Standards updated successfully");
      }
    },
    updateCredentialCollection(state, action) {
      const { credentialCollection } = action.payload;
      const productIndex = state.products.findIndex(product => product.productId === state.currentProductId);
      if (productIndex !== -1) {
        state.products[productIndex].knowledgeBase.credentialCollection = credentialCollection;
        alert("Certificates, Licenses, Documents Required updated successfully");
      }
    },
    updateApplicationUseCase(state, action) {
      const { applicationUseCase } = action.payload;
      const productIndex = state.products.findIndex(product => product.productId === state.currentProductId);
      if (productIndex !== -1) {
        state.products[productIndex].knowledgeBase.applicationUseCase = applicationUseCase;
        alert("Application of Product Use (End Consumer of Goods/Services) updated successfully");
      }
    },
  },
});

export const { setCurrentProduct, createNewProduct,updateSwot,updateDescription,updateVariety, updateEPC_RCMC,updateEvaluationCriteria,updateCredentialCollection,updateApplicationUseCase} = ProductSlice.actions;
export default ProductSlice.reducer;
