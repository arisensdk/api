## Objects

<dl>
<dt><a href="#arisen">arisen</a> : <code>object</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#bytes">bytes</a> : <code>Buffer</code> | <code>hex</code></dt>
<dd></dd>
<dt><a href="#getCodeResult">getCodeResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getCodeHashResult">getCodeHashResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getAbiResult">getAbiResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getRawCodeAndAbiResult">getRawCodeAndAbiResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#abiJsonToBinResult">abiJsonToBinResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#abiBinToJsonResult">abiBinToJsonResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getTableRowsResult">getTableRowsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getCurrencyStatsResult">getCurrencyStatsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getProducersResult">getProducersResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getProducerScheduleResult">getProducerScheduleResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getScheduledTransactionsResult">getScheduledTransactionsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#pushBlockResult">pushBlockResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#pushTransactionResult">pushTransactionResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getTableByScopeResult">getTableByScopeResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getActionsResult">getActionsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getTransactionResult">getTransactionResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getKeyAccountsResult">getKeyAccountsResult</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#getControlledAccountsResult">getControlledAccountsResult</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="arisen"></a>

## arisen : <code>object</code>
**Kind**: global namespace  

* [arisen](#arisen) : <code>object</code>
    * [.getInfo()](#arisen.getInfo) ⇒ <code>string</code>
    * [.getAccount(account_name)](#arisen.getAccount) ⇒ <code>string</code>
    * [.getCode(account_name, [code_as_wasm])](#arisen.getCode) ⇒ [<code>getCodeResult</code>](#getCodeResult)
    * [.getCodeHash(account_name)](#arisen.getCodeHash) ⇒ [<code>getCodeHashResult</code>](#getCodeHashResult)
    * [.getAbi(account_name)](#arisen.getAbi) ⇒ [<code>getAbiResult</code>](#getAbiResult)
    * [.getRawCodeAndAbi(account_name)](#arisen.getRawCodeAndAbi) ⇒ [<code>getRawCodeAndAbiResult</code>](#getRawCodeAndAbiResult)
    * [.abiJsonToBin(code, action, args)](#arisen.abiJsonToBin) ⇒ [<code>abiJsonToBinResult</code>](#abiJsonToBinResult)
    * [.abiBinToJson(code, action, binargs)](#arisen.abiBinToJson) ⇒ [<code>abiBinToJsonResult</code>](#abiBinToJsonResult)
    * [.getRequiredKeys(transaction, available_keys)](#arisen.getRequiredKeys) ⇒ <code>Set.&lt;public\_key&gt;</code>
    * [.getBlock(block_num_or_id)](#arisen.getBlock) ⇒ <code>variant</code>
    * [.getBlockHeaderState(block_num_or_id)](#arisen.getBlockHeaderState) ⇒ <code>string</code>
    * [.getTableRows([json], code, scope, table, table_key, [lower_bound], [upper_bound], [limit], key_type, index_position)](#arisen.getTableRows) ⇒ [<code>getTableRowsResult</code>](#getTableRowsResult)
    * [.getCurrencyBalance(code, account, symbol)](#arisen.getCurrencyBalance) ⇒ <code>Array.&lt;asset&gt;</code>
    * [.getCurrencyStats(code, symbol)](#arisen.getCurrencyStats) ⇒ [<code>getCurrencyStatsResult</code>](#getCurrencyStatsResult)
    * [.getProducers([json], lower_bound, [limit])](#arisen.getProducers) ⇒ [<code>getProducersResult</code>](#getProducersResult)
    * [.getProducerSchedule()](#arisen.getProducerSchedule) ⇒ [<code>getProducerScheduleResult</code>](#getProducerScheduleResult)
    * [.getScheduledTransactions([json], lower_bound, [limit])](#arisen.getScheduledTransactions) ⇒ [<code>getScheduledTransactionsResult</code>](#getScheduledTransactionsResult)
    * [.pushBlock(block)](#arisen.pushBlock)
    * [.pushTransaction(signed_transaction)](#arisen.pushTransaction) ⇒ [<code>pushTransactionResult</code>](#pushTransactionResult)
    * [.pushTransactions(signed_transaction)](#arisen.pushTransactions) ⇒ <code>vector.&lt;push\_transaction.results&gt;</code>
    * [.getTableByScope(code, table, [lower_bound], [upper_bound], [limit])](#arisen.getTableByScope) ⇒ [<code>getTableByScopeResult</code>](#getTableByScopeResult)
    * [.getActions(account_name, [pos], [offset])](#arisen.getActions) ⇒ [<code>getActionsResult</code>](#getActionsResult)
    * [.getTransaction(id, [block_num_hint])](#arisen.getTransaction) ⇒ [<code>getTransactionResult</code>](#getTransactionResult)
    * [.getKeyAccounts(public_key)](#arisen.getKeyAccounts) ⇒ [<code>getKeyAccountsResult</code>](#getKeyAccountsResult)
    * [.getControlledAccounts(controlling_account)](#arisen.getControlledAccounts) ⇒ [<code>getControlledAccountsResult</code>](#getControlledAccountsResult)

<a name="arisen.getInfo"></a>

### arisen.getInfo() ⇒ <code>string</code>
Return general network information.

**Kind**: static method of [<code>arisen</code>](#arisen)  
**Example**  
```js
url_path: `/v1/chain/get_info`
```
**Example**  
```js
arisen.getInfo({})
```
<a name="arisen.getAccount"></a>

### arisen.getAccount(account_name) ⇒ <code>string</code>
Fetch a blockchain account

**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| account_name | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_account`
```
**Example**  
```js
arisen.getAccount(account_name)
```
<a name="arisen.getCode"></a>

### arisen.getCode(account_name, [code_as_wasm]) ⇒ [<code>getCodeResult</code>](#getCodeResult)
Fetch smart contract code

**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type | Default |
| --- | --- | --- |
| account_name | <code>name</code> |  | 
| [code_as_wasm] | <code>bool</code> | <code>false</code> | 

**Example**  
```js
url_path: `/v1/chain/get_code`
```
**Example**  
```js
arisen.getCode(account_name, code_as_wasm)
```
<a name="arisen.getCodeHash"></a>

### arisen.getCodeHash(account_name) ⇒ [<code>getCodeHashResult</code>](#getCodeHashResult)
**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| account_name | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_code_hash`
```
**Example**  
```js
arisen.getCodeHash(account_name)
```
<a name="arisen.getAbi"></a>

### arisen.getAbi(account_name) ⇒ [<code>getAbiResult</code>](#getAbiResult)
**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| account_name | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_abi`
```
**Example**  
```js
arisen.getAbi(account_name)
```
<a name="arisen.getRawCodeAndAbi"></a>

### arisen.getRawCodeAndAbi(account_name) ⇒ [<code>getRawCodeAndAbiResult</code>](#getRawCodeAndAbiResult)
**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| account_name | <code>name</code> | 

**Example**  
```js
url_path: `/v1/chain/get_raw_code_and_abi`
```
**Example**  
```js
arisen.getRawCodeAndAbi(account_name)
```
<a name="arisen.abiJsonToBin"></a>

### arisen.abiJsonToBin(code, action, args) ⇒ [<code>abiJsonToBinResult</code>](#abiJsonToBinResult)
Manually serialize json into binary hex.  The binayargs is usually stored in Action.data.

**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| code | <code>name</code> | 
| action | <code>name</code> | 
| args | [<code>bytes</code>](#bytes) | 

**Example**  
```js
url_path: `/v1/chain/abi_json_to_bin`
```
**Example**  
```js
arisen.abiJsonToBin(code, action, args)
```
<a name="arisen.abiBinToJson"></a>

### arisen.abiBinToJson(code, action, binargs) ⇒ [<code>abiBinToJsonResult</code>](#abiBinToJsonResult)
Convert bin hex back into Abi json definition.

**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| code | <code>name</code> | 
| action | <code>name</code> | 
| binargs | [<code>bytes</code>](#bytes) | 

**Example**  
```js
url_path: `/v1/chain/abi_bin_to_json`
```
**Example**  
```js
arisen.abiBinToJson(code, action, binargs)
```
<a name="arisen.getRequiredKeys"></a>

### arisen.getRequiredKeys(transaction, available_keys) ⇒ <code>Set.&lt;public\_key&gt;</code>
**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| transaction | <code>transaction</code> | 
| available_keys | <code>set.&lt;public\_key&gt;</code> | 

**Example**  
```js
url_path: `/v1/chain/get_required_keys`
```
**Example**  
```js
arisen.getRequiredKeys(transaction, available_keys)
```
<a name="arisen.getBlock"></a>

### arisen.getBlock(block_num_or_id) ⇒ <code>variant</code>
Fetch a block from the blockchain.

**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| block_num_or_id | <code>string</code> | 

**Example**  
```js
url_path: `/v1/chain/get_block`
```
**Example**  
```js
arisen.getBlock(block_num_or_id)
```
<a name="arisen.getBlockHeaderState"></a>

### arisen.getBlockHeaderState(block_num_or_id) ⇒ <code>string</code>
Fetch the minimum state necessary to validate transaction headers.

**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| block_num_or_id | <code>string</code> | 

**Example**  
```js
url_path: `/v1/chain/get_block_header_state`
```
**Example**  
```js
arisen.getBlockHeaderState(block_num_or_id)
```
<a name="arisen.getTableRows"></a>

### arisen.getTableRows([json], code, scope, table, table_key, [lower_bound], [upper_bound], [limit], key_type, index_position) ⇒ [<code>getTableRowsResult</code>](#getTableRowsResult)
Fetch smart contract data from an account.

**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [json] | <code>bool</code> | <code>false</code> |  |
| code | <code>name</code> |  |  |
| scope | <code>string</code> |  |  |
| table | <code>name</code> |  |  |
| table_key | <code>string</code> |  |  |
| [lower_bound] | <code>string</code> | <code>0</code> |  |
| [upper_bound] | <code>string</code> | <code>-1</code> |  |
| [limit] | <code>uint32</code> | <code>10</code> |  |
| key_type | <code>string</code> |  | The key type of --index, primary only supports (i64), all others support (i64, i128, i256, float64, float128). Special type 'name' indicates an account name. |
| index_position | <code>string</code> |  | 1 - primary (first), 2 - secondary index (in order defined by multi_index), 3 - third index, etc |

**Example**  
```js
url_path: `/v1/chain/get_table_rows`
```
**Example**  
```js
arisen.getTableRows(json, code, scope, table, table_key, lower_bound, upper_bound, limit, key_type, index_position)
```
<a name="arisen.getCurrencyBalance"></a>

### arisen.getCurrencyBalance(code, account, symbol) ⇒ <code>Array.&lt;asset&gt;</code>
**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| code | <code>name</code> | 
| account | <code>name</code> | 
| symbol | <code>optional.&lt;string&gt;</code> | 

**Example**  
```js
url_path: `/v1/chain/get_currency_balance`
```
**Example**  
```js
arisen.getCurrencyBalance(code, account, symbol)
```
<a name="arisen.getCurrencyStats"></a>

### arisen.getCurrencyStats(code, symbol) ⇒ [<code>getCurrencyStatsResult</code>](#getCurrencyStatsResult)
**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| code | <code>name</code> | 
| symbol | <code>string</code> | 

**Example**  
```js
url_path: `/v1/chain/get_currency_stats`
```
**Example**  
```js
arisen.getCurrencyStats(code, symbol)
```
<a name="arisen.getProducers"></a>

### arisen.getProducers([json], lower_bound, [limit]) ⇒ [<code>getProducersResult</code>](#getProducersResult)
Fetch smart contract data from producer.

**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type | Default |
| --- | --- | --- |
| [json] | <code>bool</code> | <code>false</code> | 
| lower_bound | <code>string</code> |  | 
| [limit] | <code>uint32</code> | <code>50</code> | 

**Example**  
```js
url_path: `/v1/chain/get_producers`
```
**Example**  
```js
arisen.getProducers(json, lower_bound, limit)
```
<a name="arisen.getProducerSchedule"></a>

### arisen.getProducerSchedule() ⇒ [<code>getProducerScheduleResult</code>](#getProducerScheduleResult)
**Kind**: static method of [<code>arisen</code>](#arisen)  
**Example**  
```js
url_path: `/v1/chain/get_producer_schedule`
```
**Example**  
```js
arisen.getProducerSchedule()
```
<a name="arisen.getScheduledTransactions"></a>

### arisen.getScheduledTransactions([json], lower_bound, [limit]) ⇒ [<code>getScheduledTransactionsResult</code>](#getScheduledTransactionsResult)
**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [json] | <code>bool</code> | <code>false</code> |  |
| lower_bound | <code>string</code> |  | timestamp OR transaction ID |
| [limit] | <code>uint32</code> | <code>50</code> |  |

**Example**  
```js
url_path: `/v1/chain/get_scheduled_transactions`
```
**Example**  
```js
arisen.getScheduledTransactions(json, lower_bound, limit)
```
<a name="arisen.pushBlock"></a>

### arisen.pushBlock(block)
Append a block to the chain database.

**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| block | <code>signed\_block</code> | 

**Example**  
```js
url_path: `/v1/chain/push_block`
```
**Example**  
```js
arisen.pushBlock(block)
```
<a name="arisen.pushTransaction"></a>

### arisen.pushTransaction(signed_transaction) ⇒ [<code>pushTransactionResult</code>](#pushTransactionResult)
Attempts to push the transaction into the pending queue.

**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| signed_transaction | <code>signed\_transaction</code> | 

**Example**  
```js
url_path: `/v1/chain/push_transaction`
```
**Example**  
```js
arisen.pushTransaction(signed_transaction)
```
<a name="arisen.pushTransactions"></a>

### arisen.pushTransactions(signed_transaction) ⇒ <code>vector.&lt;push\_transaction.results&gt;</code>
Attempts to push transactions into the pending queue.

**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| signed_transaction | <code>signed\_transaction</code> | 

**Example**  
```js
url_path: `/v1/chain/push_transactions`
```
**Example**  
```js
arisen.pushTransactions(signed_transaction)
```
<a name="arisen.getTableByScope"></a>

### arisen.getTableByScope(code, table, [lower_bound], [upper_bound], [limit]) ⇒ [<code>getTableByScopeResult</code>](#getTableByScopeResult)
Fetch smart contract data by scope.

**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type | Default |
| --- | --- | --- |
| code | <code>name</code> |  | 
| table | <code>name</code> |  | 
| [lower_bound] | <code>string</code> | <code>0</code> | 
| [upper_bound] | <code>string</code> | <code>-1</code> | 
| [limit] | <code>uint32</code> | <code>10</code> | 

**Example**  
```js
url_path: `/v1/chain/get_table_by_scope`
```
**Example**  
```js
arisen.getTableByScope(code, table, lower_bound, upper_bound, limit)
```
<a name="arisen.getActions"></a>

### arisen.getActions(account_name, [pos], [offset]) ⇒ [<code>getActionsResult</code>](#getActionsResult)
**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type | Description |
| --- | --- | --- |
| account_name | <code>account\_name</code> |  |
| [pos] | <code>int32</code> | An absolute sequence positon -1 is the end/last action |
| [offset] | <code>int32</code> | The number of actions relative to pos, negative numbers return [pos-offset,pos), positive numbers return [pos,pos+offset) |

**Example**  
```js
url_path: `/v1/history/get_actions`
```
**Example**  
```js
arisen.getActions(account_name, pos, offset)
```
<a name="arisen.getTransaction"></a>

### arisen.getTransaction(id, [block_num_hint]) ⇒ [<code>getTransactionResult</code>](#getTransactionResult)
Retrieve a transaction from the blockchain.

**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>transaction\_id\_type</code> |  |  |
| [block_num_hint] | <code>uint32</code> | <code>0</code> | A non-zero block number allows shorter transaction IDs (8 hex, 4 bytes) |

**Example**  
```js
url_path: `/v1/history/get_transaction`
```
**Example**  
```js
arisen.getTransaction(id, block_num_hint)
```
<a name="arisen.getKeyAccounts"></a>

### arisen.getKeyAccounts(public_key) ⇒ [<code>getKeyAccountsResult</code>](#getKeyAccountsResult)
**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| public_key | <code>public\_key\_type</code> | 

**Example**  
```js
url_path: `/v1/history/get_key_accounts`
```
**Example**  
```js
arisen.getKeyAccounts(public_key)
```
<a name="arisen.getControlledAccounts"></a>

### arisen.getControlledAccounts(controlling_account) ⇒ [<code>getControlledAccountsResult</code>](#getControlledAccountsResult)
**Kind**: static method of [<code>arisen</code>](#arisen)  

| Param | Type |
| --- | --- |
| controlling_account | <code>account\_name</code> | 

**Example**  
```js
url_path: `/v1/history/get_controlled_accounts`
```
**Example**  
```js
arisen.getControlledAccounts(controlling_account)
```
<a name="bytes"></a>

## bytes : <code>Buffer</code> \| <code>hex</code>
**Kind**: global typedef  
<a name="getCodeResult"></a>

## getCodeResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_name | <code>name</code> | 
| wast | <code>string</code> | 
| wasm | <code>string</code> | 
| code_hash | <code>sha256</code> | 
| abi | <code>optional.&lt;abi\_def&gt;</code> | 

<a name="getCodeHashResult"></a>

## getCodeHashResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_name | <code>name</code> | 
| code_hash | <code>sha256</code> | 

<a name="getAbiResult"></a>

## getAbiResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_name | <code>name</code> | 
| [abi] | <code>abi\_def</code> | 

<a name="getRawCodeAndAbiResult"></a>

## getRawCodeAndAbiResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_name | <code>name</code> | 
| wasm | [<code>bytes</code>](#bytes) | 
| [abi] | <code>abi\_def</code> | 

<a name="abiJsonToBinResult"></a>

## abiJsonToBinResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| binargs | [<code>bytes</code>](#bytes) | 

<a name="abiBinToJsonResult"></a>

## abiBinToJsonResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| args | [<code>bytes</code>](#bytes) | 

<a name="getTableRowsResult"></a>

## getTableRowsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| rows | <code>vector</code> | One row per item, either encoded as hex String or JSON object |
| more | <code>bool</code> | True if last element in data is not the end and sizeof data() < limit |

<a name="getCurrencyStatsResult"></a>

## getCurrencyStatsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| supply | <code>asset</code> | 
| max_supply | <code>asset</code> | 
| issuer | <code>account\_name</code> | 

<a name="getProducersResult"></a>

## getProducersResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| rows | <code>vector</code> | one row per item, either encoded as hex String or JSON object |
| total_producer_vote_weight | <code>double</code> | total vote |
| more | <code>string</code> | fill lower_bound with this value to fetch more rows |

<a name="getProducerScheduleResult"></a>

## getProducerScheduleResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| vector | <code>proposed</code> | 

<a name="getScheduledTransactionsResult"></a>

## getScheduledTransactionsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| vector | <code>transactions</code> |  |
| more | <code>string</code> | fill lower_bound with this to fetch next set of transactions |

<a name="pushBlockResult"></a>

## pushBlockResult : <code>object</code>
**Kind**: global typedef  
<a name="pushTransactionResult"></a>

## pushTransactionResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| transaction_id | <code>fixed\_bytes32</code> | 
| processed | [<code>bytes</code>](#bytes) | 

<a name="getTableByScopeResult"></a>

## getTableByScopeResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| rows | <code>vector</code> | One row per item, either encoded as hex String or JSON object |
| more | <code>bool</code> | True if last element in data is not the end and sizeof data() < limit |

<a name="getActionsResult"></a>

## getActionsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| actions | <code>Array.&lt;ordered\_action\_result&gt;</code> | 
| last_irreversible_block | <code>uint32</code> | 
| [time_limit_exceeded_error] | <code>bool</code> | 

<a name="getTransactionResult"></a>

## getTransactionResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>transaction\_id\_type</code> | 
| trx | <code>variant</code> | 
| block_time | <code>block\_timestamp\_type</code> | 
| block_num | <code>uint32</code> | 
| last_irreversible_block | <code>uint32</code> | 
| traces | <code>Array.&lt;variant&gt;</code> | 

<a name="getKeyAccountsResult"></a>

## getKeyAccountsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| account_names | <code>Array.&lt;account\_name&gt;</code> | 

<a name="getControlledAccountsResult"></a>

## getControlledAccountsResult : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| controlled_accounts | <code>Array.&lt;account\_name&gt;</code> | 

