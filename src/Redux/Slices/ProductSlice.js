import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedProductId:null,
};

const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState: initialState,
    reducers: {
        setCurrentProduct(state, action) {
            state.currentProduct = action.payload;
        },
        createNewProduct(state, action) {
            // Generate a unique ID for the new product
            const id = Math.floor(Math.random() * 10000000000);
            // Create the new product object
            const newProduct = {
                productId: id,
                productName: action.payload.productName,
                hsCode: action.payload.hsCode,
                selectionReason: action.payload.selectionReason,
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
                            productionHub: [{
                                state: "Enter State",
                                city: "Enter City",
                                townVillage: "Enter Town/Village",
                                season: "Enter Season",
                            }],
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
            // Add the new product to the state
            state.products.push(newProduct);
        },
    },
});

export const { setCurrentProduct, createNewProduct } = ProductSlice.actions;
export default ProductSlice.reducer;