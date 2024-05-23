class ShoppingList {
    itemName: string;
    isMarked: boolean;
    isDeleted: boolean;

    constructor(itemName: string, isMarked: boolean = false, isDeleted: boolean = false){
        this.itemName = itemName;
        this.isMarked  = isMarked;
        this.isDeleted = isDeleted;

    }
    set deleteStatus(value: boolean){
        this.isDeleted = value;
    }
    get deleteStatus(): boolean{
        return this.isDeleted;
    }

    set markedStatus(value: boolean){
        this.isMarked = value;
    }
    get markedStatus(): boolean {
        return this.isMarked;
    }

    get item(): string {
        return this.itemName;
    }
}

class ShoppingApp {
    items: ShoppingList[];
    placeholder: HTMLInputElement;
    ul: HTMLUListElement;
    markedCountElement: HTMLElement;
    unmarkedCountElement: HTMLElement;

    constructor(items: ShoppingList[], placeholder: string='', ul: string='', markedCountElement: number=0, unmarkedCountElement: number=0) {
        this.items = items;
        this.placeholder = document.getElementById("textAdd") as HTMLInputElement;
        this.ul = document.getElementById("shop-items") as HTMLUListElement;
        this.markedCountElement = document.getElementById("marked-items") as HTMLElement;
        this.unmarkedCountElement = document.getElementById("unmarked-items") as HTMLElement;


        this.placeholder.addEventListener('keydown', (e:KeyboardEvent ) => {
            if(e.key === 'Enter'){
                this.addItem();
            }
        });
    }
    addItem(){
        let input: string = this.placeholder.value.trim();
        if(input.length === 0){
            alert("Enter a valid item");
            return;
        }
    
    let inputLower = input.toLowerCase();
    for(let item of this.items){
        if (item.itemName.toLowerCase() === inputLower && !item.isDeleted) {
            alert("Item already exists");
            return;
        }
    }
    let shoppingItem = new ShoppingList(input);
    this.items.push(shoppingItem);
    this.renderItem(shoppingItem);
    this.placeholder.value = "";
    this.placeholder.placeholder = "New item..";
    }

    renderItem(shoppingItem: ShoppingList){
        let listItem = document.createElement("li");
        listItem.textContent = shoppingItem.item;
        let deleteBtn = document.createElement("span");
        deleteBtn.classList.add("Delete");
        deleteBtn.textContent = "X";

        listItem.appendChild(deleteBtn);
        this.ul.appendChild(listItem);

        deleteBtn.addEventListener("click", () => {
            shoppingItem.deleteStatus =true;
            listItem.remove();
            this.updateCount();
            
        });

        listItem.addEventListener("click", ()=> {
            shoppingItem.markedStatus = !shoppingItem.isMarked;
            listItem.classList.toggle("change");
            this.updateCount();

        });

        this.updateCount();
    }
    updateCount(): void {
        let marked = 0;
        let unmarked = 0;
       // const listItems =this.ul.getElementsByTagName("li");
        const listItems = Array.from(this.ul.getElementsByTagName("li"));



        for(let listItem of listItems){
            if(listItem.classList.contains("change")){
                marked++;
            }
            else{
                unmarked++;
            }
        }
        this.markedCountElement.textContent =`${marked}`;
        this.unmarkedCountElement.textContent = `${unmarked}`;
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const itemList : ShoppingList[] =[];
    new ShoppingApp(itemList);
});
