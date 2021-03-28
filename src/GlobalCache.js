class GlobalCache{
    constructor(){
		this.updateCallbacks = {};
    this.registerCallback = this.registerCallback.bind(this);
    this.insert = this.insert.bind(this);
  }
	registerCallback(key, callback){
		this.updateCallbacks[key] = callback;
	}
  insert(key){
    this.updateCallbacks[key]();
  }
    
}
export var globalCache = new GlobalCache();