import express from "express";
import { STATUS_CODES } from "http";
import { runInNewContext } from "vm";
import { inventory, Product } from "./data";

const app = express();
app.use(express.json());

app.get("/test", (req, res) => {
    res.status(200).send("A API tá funcionando");
});

app.post("/newproduct", (req, res) => {
    try {
        let newProduct = {
            id: Date.now().toString(),
            name: req.body.name,
            price: req.body.price,
        };
        
        if (!newProduct.name) {
            throw new Error("Preencha o nome do produto")
        } else if (!newProduct.price) {
            throw new Error("Coloque o valor do produto")
        } else if (!newProduct.name && !newProduct.price) {
            throw new Error("Preencha os dados do produto")
        }
        if (typeof newProduct.name !== "string") {
            throw new Error("O nome do produto deve ser uma string")
        }
        if (typeof newProduct.price !== "number") {
            throw new Error("O valor do produto deve ser do tipo 'number'")
        }
        if (newProduct.price <= 0) {
            throw new Error("O valor do produto não pode ser menor ou igual a zero")
        }

        if(newProduct.name && newProduct.price) {
            inventory.push(newProduct)
        }
        let updatedInventory = inventory.map((item) => {
            return {
                id: item.id,
                name: item.name,
                price: item.price,
            };
        });
        res.status(200).send(updatedInventory)
    }

    catch (e: any) {
        switch (e.message) {
            case "Preencha o nome do produto":
                res.status(422).send(e.message)
                break
            case "Coloque o valor do produto":
                res.status(422).send(e.message)
                break
            case "Preencha os dados do produto":
                res.status(422).send(e.message)
                break
            case "O nome do produto deve ser uma string":
                res.status(422).send(e.message)
                break
            case "O valor do produto deve ser do tipo 'number'":
                res.status(422).send(e.message)
                break
            case "O valor do produto dese ser um número maior que zero":
                res.status(422).send(e.message)
            default:
                res.status(500).send(e.message)
                break
        }
    }
});


app.get("/allproducts", (req, res) => {
    let search = req.query.search
    
    if(!search) {
        let allProducts = inventory.map((item) => {
            return {
                id: item.id,
                name: item.name,
                price: item.price,
            };
        });
        res.status(200).send(allProducts);
    }

    if (search !== undefined) {
        let product = inventory.filter((item) => {
            return item.name === search
        })
        console.log(product[0])
        res.status(200).send(product[0]);
    }
});


app.put("/updateproduct/:productId", (req, res) => {
   try {
    let productId = req.params.productId;

    let productFound = false;

    for(let i=0; i<inventory.length; i++) {
        if (inventory[i].id === productId) {
            productFound = true
        }
    }
    if (!productFound) {
        throw new Error("Produto não encontrado. Verifique o id.")
    }
    let product = inventory
        .filter((item) => {
            return item.id === productId; 
        })
        .map((item) => {
            return {
                id: item.id,
                name: item.name,
                price: req.body.price,
            };
        });

    let allProducts = inventory.map((item) => {
        if (product[0].id !== item.id) {
            return { ...item };
        } else {
            return {
                ...item,
                price: product[0].price,
            };
        }
    });

    if(!req.body.price) {
        throw new Error("O valor do produto deve ser enviado")
    } else if (typeof req.body.price !== "number") {
        throw new Error("O valor do produto deve ser do tipo 'number'")
    } else if(req.body.price <= 0) {
        throw new Error("O valor do produto deve ser maior que zero")
    }

    res.status(200).send(allProducts);
}
catch (e: any){
    switch (e.message) {
        case "Produto não encontrado. Verifique o id.":
            res.status(422).send(e.message)
            break
        case "O valor do produto deve ser enviado":
            res.status(422).send(e.message)
            break
        case "O valor do produto deve ser do tipo 'number'":
            res.status(422).send(e.message)
            break
        case "O valor do produto deve ser maior que zero":
            res.status(422).send(e.message)
        default:
            res.status(500).send(e.message)
            break
    }
}
});


app.delete("/delete/:productId", (req, res) => {
    try {
    const productId = req.params.productId
    let productFound = false;


    for(let i=0; i<inventory.length; i++) {
        if (inventory[i].id === productId) {
            productFound = true
        }
    }

    if (!productFound) {
        throw new Error("Produto não encontrado. Verifique o id.")
    }

    const deleteProduct = inventory.filter((item) => {
        return item.id !== productId
    })

    res.status(220).send(deleteProduct)
}
catch(e: any){
    if (e.message === "Produto não encontrado. Verifique o id.") {
            res.status(422).send(e.message)
    } else {
        res.status(500).send(e.message)
    }
}
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        console.log(`O servidor tá ON! (na porta 3003)`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
